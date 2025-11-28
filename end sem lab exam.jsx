<!DOCTYPE html>
<html>
<head>
    <title>Student Feedback Form</title>
</head>
<body>

<h2>Student Feedback Form</h2>

<form id="feedbackForm">
    <label>Name:</label><br>
    <input type="text" id="name"><br><br>

    <label>Course:</label><br>
    <input type="text" id="course"><br><br>

    <label>Rating (1–5):</label><br>
    <input type="number" id="rating" min="1" max="5"><br><br>

    <label>Comments:</label><br>
    <textarea id="comments"></textarea><br><br>

    <label>Upload File (screenshot/document):</label><br>
    <input type="file" id="fileUpload"><br><br>

    <button type="submit">Submit</button>
</form>

<h3 id="message" style="color: green;"></h3>

<script>
    document.getElementById("feedbackForm").addEventListener("submit", function(event){
        event.preventDefault(); // Stop default form submit

        let name = document.getElementById("name").value;
        let course = document.getElementById("course").value;
        let rating = document.getElementById("rating").value;
        let comments = document.getElementById("comments").value;
        let file = document.getElementById("fileUpload").files[0];

        // Validation
        if(name === "" || course === "" || rating === "" || !file){
            alert("Please fill all fields and upload a file.");
            return;
        }

        // Log form data
        console.log("Name:", name);
        console.log("Course:", course);
        console.log("Rating:", rating);
        console.log("Comments:", comments);
        console.log("Uploaded File:", file.name);

        // Show success message
        document.getElementById("message").innerText = "Feedback submitted successfully!";
    });
</script>

</body>
</html>
