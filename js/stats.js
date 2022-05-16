/*  stats.js */

/**
 * @param {array} grades
 * @param {number} grade
 */
 export function addGrade(grades, grade) {
  grades.push(grade);
  console.log(grades);
  return grades;
}

/**
 * @param {array} grades
 */
export function getNumberOfGrades(grades) {
  return grades.length;
}

/**
 * @param {array} grades
 */
export function getFirstGrade(grades) {
	return grades[0];
}

/**
 * @param {array} grades
 */
export function getLastGrade(grades) {
	return grades[grades.length - 1];
}

/**
 * @param {array} grades
 */
export function isTestTooEasy(grades) {
  let maxValue = grades.length * 20;
  let sum = 0;
  grades.forEach(function(grade) {
    sum = sum + grade
  });
  if(sum / (maxValue / 100) <= 50) {
    return 'Тест сложный'
  }
  else {return 'Тест не сложный'}
}

/**
 * @param {array} grades
 * @param {number} grade
 */
export function gradeExists(grades, grade) {
  let counter = 0;
  for (let i = 0; i < grades.length; i++) {
    if(grades[i] == grade){
      counter++
    }
  } 
  return `Учеников с оценкой ${grade} - ${counter}`;
}

/**
 * @param {array} grades
 */
export function exportCSV(grades) {
	return grades.join(", ");
}