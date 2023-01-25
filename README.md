# Authorization overview for Sell and Resell 🎉

## 🔮 This project uses

- ⚛️ [React](https://reactjs.org/)
- 🛡️ [Node](https://nodejs.org/en/)

## 📖 How to run

- 🔽 Create MongoDB database and name "test"

- 🚪 Enter the frontend directory

        cd frontend

- 🧑‍💻 Install the dependencies

        npm i

- 🚪 Enter the backend directory

        cd backend

- 🧑‍💻 Install the dependencies

        npm i

- 🚀 Start the project with dev mode in backend directory

        npm run dev
        

# Test Web UI

Register in site
When user regist in this site, should select authorization

Login as user role

Then login as admin role

There are 3 pages:

        1. Seller - User and Admin can access this page.

        2. Reseller - Only Admin can access this page. 
        
        3. Users - Only Admin can access this page.


If user with a user role access Reseller and Users pages, the 403 page will occure.

