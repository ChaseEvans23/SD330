var data;
var coursesString;
var textbookString = "";
var class1 = false;
var class2 = false;
var class3 = false;


async function fetchData() {
    const response = await fetch("https://chaseevans23.github.io/SD330/foxbooks.json")
    data = await response.json();
}

function error404() {
    window.location.href = 'foxbooks-error-404.html';
}
function returnHome() {
    window.location.href = 'foxbooks.html';
}
function viewCourses() {
    window.location.href = 'courses.html';
}

function showClass1Books() {
    class1 = true;
    class2 = false;
    class3 = false;
}
function hideClass1Books() {
    class1 = false;
}

function showClass2Books() {
    class1 = false;
    class2 = true;
    class3 = false;
}
function hideClass2Books() {
    class2 = false;
}

function showClass3Books() {
    class1 = false;
    class2 = false;
    class3 = true;
}
function hideClass3Books() {
    class3 = false;
}

const selectedCourseState = {
    MATH: "Math",
    HISTORY: "History",
    SCIENCE: "Science",
    LANGUAGE: "Language",
    NONE: "None"
};

let currentState = selectedCourseState.NONE;

function mathCoursesSelected() {
    currentState = selectedCourseState.MATH;
    coursesString = "The current available <b><i>Math Courses</i></b> are: " 
    + "<li>" 
    + "<a href='#' onclick='showClass1Books(); displayTextbookInfo()'>"
    + data.courses["120"].courseTitle 
    + "</a>"
    + "</li> <li>" 
    + "<a href='#' onclick='showClass2Books(); displayTextbookInfo()'>"
    + data.courses["210"].courseTitle 
    + "</a>"
    + "</li> <li>" 
    + "<a href='#' onclick='showClass3Books(); displayTextbookInfo()'>"
    + data.courses["260"].courseTitle 
    + "</a>"
    + "</li>";
    document.getElementById('courseInfo').innerHTML = coursesString;
}

function historyCoursesSelected() {
    currentState = selectedCourseState.HISTORY;
    coursesString = "The current available <b><i>History Courses</i></b> are: " 
    + "<li>" 
    + "<a href='#' onclick='showClass1Books(); displayTextbookInfo()'>"
    + data.courses["180"].courseTitle 
    + "</a>"
    + "</li> <li>" 
    + "<a href='#' onclick='showClass2Books(); displayTextbookInfo()'>"
    + data.courses["270"].courseTitle 
    + "</a>"
    + "</li>"
    document.getElementById('courseInfo').innerHTML = coursesString;
}

function scienceCoursesSelected() {
    currentState = selectedCourseState.SCIENCE;
    coursesString = "The current available <b><i>History Courses</i></b> are: " 
    + "<li>" 
    + "<a href='#' onclick='showClass1Books(); displayTextbookInfo()'>"
    + data.courses["230"].courseTitle 
    + "</a>"
    + "</li> <li>" 
    + "<a href='#' onclick='showClass2Books(); displayTextbookInfo()'>"
    + data.courses["350"].courseTitle 
    + "</a>"
    + "</li>"
    document.getElementById('courseInfo').innerHTML = coursesString;
}

function languageCoursesSelected() {
    currentState = selectedCourseState.LANGUAGE;
    coursesString = "The current available <b><i>History Courses</i></b> are: " 
    + "<li>" 
    + "<a href='#' onclick='showClass1Books(); displayTextbookInfo()'>"
    + data.courses["140"].courseTitle 
    + "</a>"
    + "</li> <li>" 
    + "<a href='#' onclick='showClass2Books(); displayTextbookInfo()'>"
    + data.courses["310"].courseTitle 
    + "</a>"
    + "</li>"
    document.getElementById('courseInfo').innerHTML = coursesString;
}


function clearSelection() {
    currentState = selectedCourseState.NONE;
    coursesString = "<p></p>";
    textbookString = "<p></p>";
    document.getElementById('courseInfo').innerHTML = coursesString;
    document.getElementById('textbookInfo').innerHTML = textbookString;
}


function displayTextbookInfo() {
    switch (currentState) {
        case "Math":
            textbookString = "Textbooks for Selected Course:"
            if (class1 == true) {
                hideClass2Books();
                hideClass3Books();
                textbookString += "<li>Title: " + data.courses["120"].textbooks["1"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["120"].textbooks["1"].author
                + "</li><li>Publisher: " + data.courses["120"].textbooks["1"].publisher
                + "</li><li>Edition: " + data.courses["120"].textbooks["1"].edition 
                + "</li><li>ISBN: " + data.courses["120"].textbooks["1"].ISBN 
                + "</ul>"

                textbookString += "<li>Title: " + data.courses["120"].textbooks["2"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["120"].textbooks["2"].author
                + "</li><li>Publisher: " + data.courses["120"].textbooks["2"].publisher
                + "</li><li>Edition: " + data.courses["120"].textbooks["2"].edition 
                + "</li><li>ISBN: " + data.courses["120"].textbooks["2"].ISBN 
                + "</ul>"
            }

            if (class2 == true) {
                hideClass1Books();
                hideClass3Books();
                textbookString += "<li>Title: " + data.courses["210"].textbooks["1"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["210"].textbooks["1"].author
                + "</li><li>Publisher: " + data.courses["210"].textbooks["1"].publisher
                + "</li><li>Edition: " + data.courses["210"].textbooks["1"].edition 
                + "</li><li>ISBN: " + data.courses["210"].textbooks["1"].ISBN 
                + "</ul>"

                textbookString += "<li>Title: " + data.courses["210"].textbooks["2"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["210"].textbooks["2"].author
                + "</li><li>Publisher: " + data.courses["210"].textbooks["2"].publisher
                + "</li><li>Edition: " + data.courses["210"].textbooks["2"].edition 
                + "</li><li>ISBN: " + data.courses["210"].textbooks["2"].ISBN 
                + "</ul>"
            }

            if (class3 == true) {
                hideClass1Books();
                hideClass2Books();
                textbookString += "<li>Title: " + data.courses["260"].textbooks["1"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["260"].textbooks["1"].author
                + "</li><li>Publisher: " + data.courses["260"].textbooks["1"].publisher
                + "</li><li>Edition: " + data.courses["260"].textbooks["1"].edition 
                + "</li><li>ISBN: " + data.courses["260"].textbooks["1"].ISBN 
                + "</ul>"

                textbookString += "<li>Title: " + data.courses["260"].textbooks["2"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["260"].textbooks["2"].author
                + "</li><li>Publisher: " + data.courses["260"].textbooks["2"].publisher
                + "</li><li>Edition: " + data.courses["260"].textbooks["2"].edition 
                + "</li><li>ISBN: " + data.courses["260"].textbooks["2"].ISBN 
                + "</ul>"
            }
            document.getElementById('textbookInfo').innerHTML = textbookString;
            break;
//////////////////////////////////////////////////////////////////////////////////////////////
        case "History":
            textbookString = "Textbooks for Selected Course:"
            if (class1 == true) {
                hideClass2Books();
                hideClass3Books();
                textbookString += "<li>Title: " + data.courses["180"].textbooks["1"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["180"].textbooks["1"].author
                + "</li><li>Publisher: " + data.courses["180"].textbooks["1"].publisher
                + "</li><li>Edition: " + data.courses["180"].textbooks["1"].edition 
                + "</li><li>ISBN: " + data.courses["180"].textbooks["1"].ISBN 
                + "</ul>"

                textbookString += "<li>Title: " + data.courses["180"].textbooks["2"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["180"].textbooks["2"].author
                + "</li><li>Publisher: " + data.courses["180"].textbooks["2"].publisher
                + "</li><li>Edition: " + data.courses["180"].textbooks["2"].edition 
                + "</li><li>ISBN: " + data.courses["180"].textbooks["2"].ISBN 
                + "</ul>"
            }
            if (class2 == true) {
                hideClass1Books();
                hideClass3Books();
                textbookString += "<li>Title: " + data.courses["270"].textbooks["1"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["270"].textbooks["1"].author
                + "</li><li>Publisher: " + data.courses["270"].textbooks["1"].publisher
                + "</li><li>Edition: " + data.courses["270"].textbooks["1"].edition 
                + "</li><li>ISBN: " + data.courses["270"].textbooks["1"].ISBN 
                + "</ul>"

                textbookString += "<li>Title: " + data.courses["270"].textbooks["2"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["270"].textbooks["2"].author
                + "</li><li>Publisher: " + data.courses["270"].textbooks["2"].publisher
                + "</li><li>Edition: " + data.courses["270"].textbooks["2"].edition 
                + "</li><li>ISBN: " + data.courses["270"].textbooks["2"].ISBN 
                + "</ul>"
            }
            document.getElementById('textbookInfo').innerHTML = textbookString;
            break;
//////////////////////////////////////////////////////////////////////////////////////////////
        case "Science":
            textbookString = "Textbooks for Selected Course:"
            if (class1 == true) {
                hideClass2Books();
                hideClass3Books();
                textbookString += "<li>Title: " + data.courses["230"].textbooks["1"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["230"].textbooks["1"].author
                + "</li><li>Publisher: " + data.courses["230"].textbooks["1"].publisher
                + "</li><li>Edition: " + data.courses["230"].textbooks["1"].edition 
                + "</li><li>ISBN: " + data.courses["230"].textbooks["1"].ISBN 
                + "</ul>"

                textbookString += "<li>Title: " + data.courses["230"].textbooks["2"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["230"].textbooks["2"].author
                + "</li><li>Publisher: " + data.courses["230"].textbooks["2"].publisher
                + "</li><li>Edition: " + data.courses["230"].textbooks["2"].edition 
                + "</li><li>ISBN: " + data.courses["230"].textbooks["2"].ISBN 
                + "</ul>"
            }
            if (class2 == true) {
                hideClass1Books();
                hideClass3Books();
                textbookString += "<li>Title: " + data.courses["350"].textbooks["1"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["350"].textbooks["1"].author
                + "</li><li>Publisher: " + data.courses["350"].textbooks["1"].publisher
                + "</li><li>Edition: " + data.courses["350"].textbooks["1"].edition 
                + "</li><li>ISBN: " + data.courses["350"].textbooks["1"].ISBN 
                + "</ul>"

                textbookString += "<li>Title: " + data.courses["350"].textbooks["2"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["350"].textbooks["2"].author
                + "</li><li>Publisher: " + data.courses["350"].textbooks["2"].publisher
                + "</li><li>Edition: " + data.courses["350"].textbooks["2"].edition 
                + "</li><li>ISBN: " + data.courses["350"].textbooks["2"].ISBN 
                + "</ul>"
            }
            document.getElementById('textbookInfo').innerHTML = textbookString;
            break;
//////////////////////////////////////////////////////////////////////////////////////////////
        case "Language":
            textbookString = "Textbooks for Selected Course:"
            if (class1 == true) {
                hideClass2Books();
                hideClass3Books();
                textbookString += "<li>Title: " + data.courses["140"].textbooks["1"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["140"].textbooks["1"].author
                + "</li><li>Publisher: " + data.courses["140"].textbooks["1"].publisher
                + "</li><li>Edition: " + data.courses["140"].textbooks["1"].edition 
                + "</li><li>ISBN: " + data.courses["140"].textbooks["1"].ISBN 
                + "</ul>"

                textbookString += "<li>Title: " + data.courses["140"].textbooks["2"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["140"].textbooks["2"].author
                + "</li><li>Publisher: " + data.courses["140"].textbooks["2"].publisher
                + "</li><li>Edition: " + data.courses["140"].textbooks["2"].edition 
                + "</li><li>ISBN: " + data.courses["140"].textbooks["2"].ISBN 
                + "</ul>"
            }
            if (class2 == true) {
                hideClass1Books();
                hideClass3Books();
                textbookString += "<li>Title: " + data.courses["310"].textbooks["1"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["310"].textbooks["1"].author
                + "</li><li>Publisher: " + data.courses["310"].textbooks["1"].publisher
                + "</li><li>Edition: " + data.courses["310"].textbooks["1"].edition 
                + "</li><li>ISBN: " + data.courses["310"].textbooks["1"].ISBN 
                + "</ul>"

                textbookString += "<li>Title: " + data.courses["310"].textbooks["2"].title + "</li>"
                textbookString += "<ul>" 
                + "<li>Author: " + data.courses["310"].textbooks["2"].author
                + "</li><li>Publisher: " + data.courses["310"].textbooks["2"].publisher
                + "</li><li>Edition: " + data.courses["310"].textbooks["2"].edition 
                + "</li><li>ISBN: " + data.courses["310"].textbooks["2"].ISBN 
                + "</ul>"
            }
            document.getElementById('textbookInfo').innerHTML = textbookString;
            break;
//////////////////////////////////////////////////////////////////////////////////////////////
        case "None":
            hideClass1Books();
            hideClass2Books();
            hideClass3Books();
            break;
    }
}
