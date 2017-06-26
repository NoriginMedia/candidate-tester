## Candidate-Tester
This Repo is intended to instruct new Frontend web candidates on steps to follow for completing the Norigin Media testing task.

---

#### What we want to assess:

* Your coding skills.
* Intuition for design & UX.
* Framework & Tooling knowledge.
* Packaging and production readiness.

#### Requirements :

 * Build a single screen of a web application (**EPG Screen**) using your choice of JS tooling / framework.
 * Use the designs in the `./mockups` folder to guide your work. 
 * Use **Mock-Api** package included to supply the EPG data. See `package.json`.
 * Implementation should be inline with production expectations.
 * Task submission is expected to be in NPM package format (**Preferably via GitHub**) with simple steps to install and run. Pass the link to your contact with our management or your recruiter when you're done.
 * Task is not expected to take any more than 2 - 3 days.

**NOTE:** There is no need to use this tester repo as the basis for your task. You can rework it, supply your own structure and include the dependencies however you prefer.

#### Bonus Points (But not required!):

* Add more interactions, animations or just nail the UX.
* Additional screens or **alternate designs :)**.
* Responsive layouts for multi-screen support.
* Implement app as hybrid app for packaging on mobile: Example (Phone Gap/ Cordova or React-Native).
* Make performance and optimization considerations.
* Go Nuts!


---
## Design Example:

We have included some mockup designs to act as a guide. You can find them in the `../mockups` folder.

Example EPG design:

![alt text](https://raw.githubusercontent.com/NoriginMedia/candidate-tester/master/mockups/EPG_small.png "Logo Title Text 1")



NOTE: Additional screens are optional and only if you really want to impress us with your skillz (Yes.. with a Z) should you add them to your app.

---

## Mock-API:

We have provided a basic mock api to supply EPG data for this task. 

To run the mock-api server execute the command below:

```
-> npm run start:mock-api
```
You should see the server start on port 1337.
```
Mock service running at http://localhost:1337
```
You can now request data from the mock-api: 
`Try It: http://localhost:1337/epg`


For additional information you can find the package and the documentation here: [Norigin Mock-API](https://github.com/NoriginMedia/mock-api/tree/cloudberry)

---
