import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Array of student data
  students = [
    { name: 'Shivani', age: 22, course: 'CE' },
    { name: 'Rahul', age: 23, course: 'IT' },
    { name: 'Amit', age: 21, course: 'ME' }
  ];

  // Method to return the data
  getStudents() {
    return this.students;
  }
}