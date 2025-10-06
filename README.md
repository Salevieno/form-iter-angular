# 🌐 Interactive Forms Example

This project is a **demonstration of two interactive forms** built with Angular, showcasing **reusable components, modularity, and scalability**.  

---

## 📝 Overview

There are **two forms** in this project:

1. **Simple Form**  
   - Contains basic fields: First name, Last name, Phone, Country.  
   - Includes **one interaction**: selecting a country automatically updates the phone prefix.

2. **Complete Form**  
   - Includes all fields from the Simple Form plus additional fields such as State, Postal Code, and Preferred Language.  
   - Additional fields are **also affected by the country selection**, demonstrating multiple interactions.

---

## 🔧 Architecture & Reusability

- **Each field is a standalone Angular component**.  
- Components are **reusable across forms**, allowing you to build larger forms easily.  
- Interactions between fields are **maintained automatically** when components are reused.  
- This approach ensures **scalability, maintainability, and clean code organization**.  

---

## 🌍 Data & Limitations

- The lists of countries and states are **shortened** (but can be easily expanded) since the focus is on **architecture and code organization**.  
- Phone masks and postal code placeholders are **for demonstration purposes only** and may not be fully accurate.  
- This project **does not make API calls**; all data is local.  

---

## 🚀 Usage

1. Clone the repository  
2. Install dependencies:  
   ```bash
   npm install
3. Run the project:
    ```bash
    npm run start
4. Use it in your browser at http://localhost:4200

## 📜 Allowed use

This project is free to use for anyone, for any legal and ethical purpose. Feel free to study, modify, or integrate it into your own projects.
