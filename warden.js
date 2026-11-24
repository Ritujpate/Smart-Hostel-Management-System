
function filterTable(inputId, tableId){
 const input=document.getElementById(inputId);
 if(!input)return;
 input.addEventListener("input",()=>{
  const q=input.value.toLowerCase();
  document.querySelectorAll(`#${tableId} tbody tr`).forEach(row=>{
   row.style.display=row.innerText.toLowerCase().includes(q)?"":"none";
  });
 });
}
document.addEventListener("DOMContentLoaded",()=>{
 filterTable("studentSearch","studentsTable");
 filterTable("complaintSearch","complaintsTable");
 filterTable("leaveSearch","leaveTable");
 filterTable("visitorSearch","visitorsTable");

 document.querySelectorAll("[data-demo]").forEach(btn=>{
  btn.addEventListener("click",()=>{
   alert(btn.dataset.demo);
  });
 });

 const noticeForm=document.getElementById("noticeForm");
 if(noticeForm){
  noticeForm.addEventListener("submit",e=>{
   e.preventDefault();
   alert("Notice published successfully (demo).");
   noticeForm.reset();
  });
 }
});
