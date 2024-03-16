'use client'
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import firebaseApp from '../../firebase'; // Import the initialized Firebase app
import AssignedTest from '../../components/AssignedTest';
import TestDetails from '../../components/TestDetails'; // Import the TestDetails component
import RequestLogin from '../../components/RequestLogin'

const AssignedTestsPage = () => {
  const [assignedTests, setAssignedTests] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  const [user, setUser] = useState(null); // State variable for user information

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      }; // Update user state on auth state change
    });
    return () => unsubscribe(); // Cleanup function to remove event listener
  }, []);

  useEffect(() => {
    const db = getDatabase(firebaseApp);
    const dbRef = ref(db, 'capacitaciones');

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const assignedTestsArray = Object.entries(data).map(([testId, testData]) => ({
          id: testId,
          ...testData,
        }));
        setAssignedTests(assignedTestsArray);
        console.log(JSON.stringify(assignedTestsArray))
      }
    });
  }, []);

  const handleTestClick = (testId) => {
    // Find the selected test from assignedTests array
    const selectedTest = assignedTests.find((test) => test.id === testId);
    setSelectedTest(selectedTest);
  };

  return (
    <main className="flex flex-col items-center justify-center p-8">
      {/* Conditionally render content if user is authenticated */}
      {user && (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {assignedTests.map((test) => (
              <AssignedTest
                key={test.id}
                testname={test.testname} // Update with the appropriate field from your data
                score={test.score} // Update with the appropriate field from your data
                finished={test.finished} // Update with the appropriate field from your data
                onClick={() => handleTestClick(test.id)} // Add onClick handler to select the test
              />
            ))}
          </div>
          {selectedTest && (
            <TestDetails
              testname={selectedTest.testname}
              videourl={selectedTest.videourl}
              questions={selectedTest.preguntas}
            />
          )}
        </>
      )}
      {
        !user && (
        <RequestLogin/>
        )
      }
    </main>
  );
};

export default AssignedTestsPage;