package com.cognizant.hql.service;

import com.cognizant.hql.model.Employee;
import com.cognizant.hql.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository
            employeeRepository;

    public EmployeeService(
            EmployeeRepository employeeRepository) {
        this.employeeRepository =
                employeeRepository;
    }

    @Transactional(readOnly = true)
    public List<Employee>
    getAllPermanentEmployees() {

        return employeeRepository
                .getAllPermanentEmployees();
    }

    @Transactional(readOnly = true)
    public Double getAverageSalary(
            int departmentId) {

        return employeeRepository
                .getAverageSalary(departmentId);
    }

    @Transactional(readOnly = true)
    public List<Employee>
    getAllEmployeesNative() {

        return employeeRepository
                .getAllEmployeesNative();
    }
}