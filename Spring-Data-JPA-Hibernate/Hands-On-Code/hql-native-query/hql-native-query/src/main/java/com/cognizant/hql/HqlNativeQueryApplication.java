package com.cognizant.hql;

import com.cognizant.hql.model.Employee;
import com.cognizant.hql.service.EmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.List;

@SpringBootApplication
public class HqlNativeQueryApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(
                    HqlNativeQueryApplication.class
            );

    private static EmployeeService employeeService;

    public static void main(String[] args) {

        ConfigurableApplicationContext context =
                SpringApplication.run(
                        HqlNativeQueryApplication.class,
                        args
                );

        employeeService =
                context.getBean(EmployeeService.class);

        testGetAllPermanentEmployees();
        //testGetAverageSalary();
        //testGetAllEmployeesNative();
    }

    // Hands-on 2
    private static void
    testGetAllPermanentEmployees() {

        LOGGER.info(
                "Permanent employee HQL test started"
        );

        List<Employee> employees =
                employeeService
                        .getAllPermanentEmployees();

        for (Employee employee : employees) {

            LOGGER.info(
                    "Employee: {}",
                    employee
            );

            LOGGER.info(
                    "Department: {}",
                    employee.getDepartment()
            );

            LOGGER.info(
                    "Skills: {}",
                    employee.getSkillList()
            );
        }

        LOGGER.info(
                "Permanent employee HQL test ended"
        );
    }

    // Hands-on 4
    private static void testGetAverageSalary() {

        LOGGER.info(
                "Average salary HQL test started"
        );

        int departmentId = 1;

        Double averageSalary =
                employeeService.getAverageSalary(
                        departmentId
                );

        LOGGER.info(
                "Average salary of department {}: {}",
                departmentId,
                averageSalary
        );

        LOGGER.info(
                "Average salary HQL test ended"
        );
    }

    // Hands-on 5
    private static void testGetAllEmployeesNative() {

        LOGGER.info(
                "Native query test started"
        );

        List<Employee> employees =
                employeeService
                        .getAllEmployeesNative();

        for (Employee employee : employees) {
            LOGGER.info(
                    "Employee: {}",
                    employee
            );
        }

        LOGGER.info(
                "Native query test ended"
        );
    }
}