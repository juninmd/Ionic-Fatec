```markdown
# AGENTS.md Guidelines

These guidelines outline best practices for development within the AGENTS repository. Adherence to these principles ensures code maintainability, scalability, and robustness.

## 1. DRY (Don't Repeat Yourself)

*   Each function, class, and module should have a single, well-defined purpose.
*   Avoid duplication of code.  Implement reusable components and functions.
*   Refactor code to eliminate redundant logic.
*   Use design patterns to create modular and cohesive solutions.

## 2. KISS (Keep It Simple, Stupid)

*   Strive for clarity and readability.
*   Favor simple solutions over complex ones.
*   Minimize complexity.
*   Limit the number of lines of code to a reasonable level.
*   Avoid unnecessary abstraction.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/module should have one primary responsibility.
*   **Open/Closed Principle:**  Systems should be extensible without modifying their existing code.
*   **Liskov Substitution Principle:**  Subclasses should be able to replace their base classes without affecting the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be required to implement interfaces they do not use.
*   **Dependency Inversion Principle:**  High-level modules should not depend on low-level modules; they should depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement functionality that is explicitly required.
*   Don't introduce unnecessary complexity or features.
*   Defer implementation until it becomes absolutely necessary.
*   Focus on solving the current problem.

## 5. Code Structure & Organization

*   **File Size Limit:**  Each file shall not exceed 180 lines of code.
*   **Modularization:** Divide the codebase into logical modules with clear responsibilities.
*   **Naming Conventions:** Consistent and descriptive naming conventions are required.  Use camelCase for variables and functions.
*   **Comments:**  Provide concise, helpful comments to explain non-obvious logic or decisions. Comments should focus on *why*, not just *what*.
*   **Documentation:**  Include a brief README file at the root of the repository explaining the purpose, dependencies, and usage.

## 6. Testing

*   All development must be productive.  Tests are secondary to the code’s functionality.
*   Unit tests should be written to verify individual components.
*   Integration tests should verify interactions between components.
*   Test coverage should be at least 80%.
*   Use a testing framework (e.g., pytest, unittest) to ensure consistent testing practices.
*   Mocking/Stubbing:  Only use mocks/stubs for testing external dependencies.  Avoid creating fake implementations.

## 7. Code Standards

*   Follow standard Python coding style (PEP 8).  Use a linter (e.g., `flake8`) to enforce style.
*   Consistent indentation and spacing.
*   Error Handling: Implement robust error handling with informative error messages.

## 8. Specific Considerations (Example – Adapt as needed)

*   **Message Handling:**  All messages should be clearly defined and handled.
*   **Data Structures:**  Use appropriate data structures for efficiency.
*   **Algorithm Design:** Prioritize efficient algorithms.
*   **Security:**  Implement basic security measures (e.g., input validation).

## 9.  Repository Structure (Example - Adapt to Project)

*   `src/`: Contains primary source code.
*   `tests/`: Contains unit and integration tests.
*   `docs/`: Contains API documentation and README.
*   `data/`: Stores data files (if applicable).

## 10.  Review Process

*   Code reviews are mandatory before any code is merged.
*   Code reviews should focus on correctness, style, and adherence to principles.

These guidelines provide a strong foundation for developing high-quality AGENTS.md code.  Regular review and adaptation are vital to maintain the integrity of the repository and ensure the project's long-term success.
```