// // Define routes
// const routes = {
//   '#home': {
//     component: 'home-view',
//     title: 'Home - Waste Management System'
//   },
//   '#signup': {
//     component: 'signup-view',
//     title: 'Sign Up - Waste Management System'
//   },
//   // ... other routes
//   '404': {
//     component: 'error-view',
//     title: '404 Not Found - Waste Management System'
//   }
// };

// // Function to render the current route
// function renderRoute() {
//   const currentRoute = window.location.hash || '#home';
//   const route = routes[currentRoute] || routes['404'];

//   // Set document title
//   document.title = route.title;

//   // Update breadcrumb
//   const bcNav = document.querySelector('.breadcrumb-nav');
//   const bcItem = document.querySelector('.bc-item');
//   if (currentRoute === '#home') {
//     bcNav.style.display = 'none';
//   } else {
//     bcNav.style.display = '';
//     const [pageTitle] = route.title.split(' - ');
//     bcItem.textContent = pageTitle;
//     bcItem.href = currentRoute;
//   }

//   // Render the component
//   const appContainer = document.getElementById('app');
//   appContainer.innerHTML = ''; // Clear previous content

//   // Check if the component is registered
//   if (customElements.get(route.component)) {
//     const component = document.createElement(route.component);
//     appContainer.appendChild(component); // ✅ Append to #app
//     console.log(`Rendered: ${route.component}`);
//   } else {
//     console.error(`Component "${route.component}" not registered.`);
//     appContainer.innerHTML = '<p>Error: Component not found.</p>';
//   }
// }

// // Listen for hash changes
// window.addEventListener('hashchange', renderRoute);

// // Initial render
// document.addEventListener('DOMContentLoaded', () => {
//   renderRoute();
// });