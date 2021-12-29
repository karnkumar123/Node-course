const fs = require('fs');
const http = require('http');
const url = require('url');
const tempStudentOverview = fs.readFileSync(`${__dirname}/template/students-overview.html`, 'utf-8');
const tempStudentCard = fs.readFileSync(`${__dirname}/template/students-card.html`, 'utf-8');
const tempstudentDetail = fs.readFileSync(`${__dirname}/template/student-detail.html`, 'utf-8');
const studentsDataJSON = fs.readFileSync(`${__dirname}/../../data-json/students-data.json`);
const studentsDataObj = JSON.parse(studentsDataJSON);
 const replaceTemp = require('./replaceTemp');

const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true);
    if(pathname === '/' || pathname === '/overview'){
        const value  = studentsDataObj.map(el => replaceTemp(el, tempStudentCard));
        let finalStudentsOverviewData = tempStudentOverview.replace('{%studentCard%}', value);
        res.writeHead(200, {"Content-type":"text/html"});
        res.end(finalStudentsOverviewData);
    }else if(pathname === '/student'){
        const requiredStudent = studentsDataObj.find((el) => el.id == query.id);
        const requiredTemp = replaceTemp(requiredStudent, tempstudentDetail);
        res.writeHead(200, {"Content-type":"text/html"});
        res.end(requiredTemp)
    }
})
server.listen(3000, 'localhost', () => {   // localhost is same as 127.0.0.1 i.e default here. We dont need to write here.
    console.log('Server is listening at port 3000.. 😜');
})