'use client'
import { createContext, useState, useContext } from 'react';

const FilteredCoursesContext = createContext();

export const useFilteredCourses = () => useContext(FilteredCoursesContext);

export const FilteredCoursesProvider = ({ children }) => {
  const [filteredCourses, setFilteredCourses] = useState([]);

  return (
    <FilteredCoursesContext.Provider value={{ filteredCourses, setFilteredCourses }}>
      {children}
    </FilteredCoursesContext.Provider>
  );
};
