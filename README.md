# User Data Fetch Webpage

A stylish single‑page application that demonstrates how to fetch and display user information from a public REST API using the **Fetch API**.

---

##  Key Features
| Feature | Description |
| ------- | ----------- |
| **Live API integration** | Retrieves a list of users in real‑time from [`jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users) via the Fetch API. |
| **Reload button** | Allows visitors to re‑fetch and refresh the data without leaving the page. |
| **Responsive, glassmorphic UI** | Modern gradient background, frosted‑glass container, animated cards, and adaptive grid that looks great on both desktop and mobile. |
| **Graceful error handling** | Displays a concise, styled error message if the request fails (e.g. offline). |
| **Vanilla JS & zero dependencies** | No frameworks required – just HTML, CSS, and JavaScript. |

---

##  Project Structure
```
Task 7/
├─ index.html   # Mark‑up with container, reload button & script import
├─ style.css    # All visual styles (gradients, cards, animations)
└─ script.js    # Fetch logic, DOM manipulation, and error handling
```

---

##  Getting Started

1. **Clone or download** this folder.  
2. Open `index.html` in your browser – **that’s it!**  
   You should see the page fade in, then user cards appear once the API call succeeds.
3. Click **“Reload Data”** anytime to trigger another fetch.

> **Note**: Because the API is public and CORS‑enabled, no backend or API key is required.

---

##  How It Works

| Step | Code reference | What happens |
| ---- | -------------- | ------------ |
| 1 | `fetchUserData()` in **script.js** | Clears previous content & sends a GET request. |
| 2 | `response.json()` | Converts the raw response to JavaScript objects. |
| 3 | `users.forEach(...)` | Iterates through each user, building a card element with template literals. |
| 4 | `.appendChild()` | Injects each card into the `.user-list` grid. |
| 5 | `.catch(error)` | Catches network issues and shows the red error banner. |

Styling is handled entirely in **style.css**, featuring:
* **Poppins** Google Font  
* 135° multi‑color gradient background  
* Glassmorphism container (`backdrop-filter: blur(12px)`)  
* Animated fade‑in (`@keyframes fadeIn`)  
* Hover‑lift effect for cards

---
