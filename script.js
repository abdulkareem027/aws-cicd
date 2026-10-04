const b=document.getElementById('topBtn');window.addEventListener('scroll',()=>{if(b)b.style.display=scrollY>300?'block':'none'});if(b)b.onclick=()=>scrollTo({top:0,behavior:'smooth'});
function showDoctor(department){

    let doctors={

        "Cardiology":"👨‍⚕️ Dr. Rajesh Kumar\nExperience: 12 Years",

        "Neurology":"👩‍⚕️ Dr. Priya Sharma\nExperience: 10 Years",

        "Orthopedics":"👨‍⚕️ Dr. Arjun Reddy\nExperience: 15 Years",

        "Pediatrics":"👩‍⚕️ Dr. Sneha Rao\nExperience: 8 Years",

        "Ophthalmology":"👨‍⚕️ Dr. Naveen Gupta\nExperience: 11 Years",

        "General Medicine":"👨‍⚕️ Dr. Vivek Singh\nExperience: 14 Years"

    };

    alert(doctors[department]);

}
const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    alert(
        "Appointment Booked Successfully!\n\n" +
        "Patient: " + name +
        "\nDepartment: " + department +
        "\nDate: " + date +
        "\nTime: " + time
    );

    appointmentForm.reset();

});
const doctorButtons = document.querySelectorAll(".doctor-card button");

doctorButtons.forEach(button => {

    button.addEventListener("click", () => {

        document.getElementById("appointment").scrollIntoView({

            behavior:"smooth"

        });

    });

});
function bookAppointment(department, doctor) {

    document.getElementById("appointment").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("department").value = department;

    document.getElementById("doctor").value = doctor;

    document.getElementById("name").focus();

}