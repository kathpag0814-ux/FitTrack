// ================= SUPABASE INIT =================

const supabaseUrl = "https://povonuuxaqtpdgkjtmuj.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvdm9udXV4YXF0cGRna2p0bXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MDQ5MjksImV4cCI6MjA5NTI4MDkyOX0.dXOo__JtpT47roX1_mHNsPvYNVj6BDbhRwblgUlvMPg";

const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
);

// ================= SHOW SECTION =================

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// ================= SAFE GET =================

function get(id) {
  return document.getElementById(id)?.value;
}

// ================= LOCAL STORAGE HELPERS =================

function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function load(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

//////////////////////////////////////////////////////
// ================= MEMBERS =========================
//////////////////////////////////////////////////////

function addMember() {

  const name = get("name");
  const membership = get("membership");

  if (!name || !membership) {
    return alert("Fill all fields");
  }

  let members = load("members");

  members.push({
    id: Date.now(),
    name,
    membership,
    status: "Active",
    created_at: new Date().toISOString()
  });

  save("members", members);

  loadMembers();

  document.getElementById("name").value = "";
  document.getElementById("membership").value = "";
}

function deleteMember(id) {

  let members = load("members");

  members = members.filter(m => m.id !== id);

  save("members", members);

  loadMembers();
}

function editMember(id) {

  let members = load("members");

  const member = members.find(m => m.id === id);

  const n = prompt("Name", member.name);
  const m = prompt("Membership", member.membership);

  if (n && m) {
    member.name = n;
    member.membership = m;

    save("members", members);
    loadMembers();
  }
}

function loadMembers() {

  let members = load("members");

  const list = document.getElementById("memberList");
  list.innerHTML = "";

  members.forEach(m => {

    list.innerHTML += `
      <div class="member">

        <div class="member-info">
          <b>${m.name}</b>
          <small>${m.membership}</small>
          <small>Status: ${m.status}</small>
          <small>Joined: ${new Date(m.created_at).toLocaleDateString()}</small>
        </div>

        <div class="member-actions">

          <button class="edit-btn" onclick="editMember(id)">Edit</button>
         <button class="delete-btn" onclick="deleteMember(id)">Delete</button>

        </div>

      </div>
    `;
  });

  document.getElementById("totalMembers").innerText = members.length;
}

//////////////////////////////////////////////////////
// ================= ATTENDANCE ======================
//////////////////////////////////////////////////////

function addAttendance(type) {

  const name = get("attName");

  if (!name) return alert("Enter member name");

  let attendance = load("attendance");

  attendance.push({
    id: Date.now(),
    name,
    type,
    time: new Date().toLocaleString()
  });

  save("attendance", attendance);

  loadAttendance();

  document.getElementById("attName").value = "";
}

function loadAttendance() {

  let attendance = load("attendance");

  const list = document.getElementById("attendanceList");
  list.innerHTML = "";

  attendance.forEach(d => {

    list.innerHTML += `
      <div class="member">
        <div class="member-info">
          <b>${d.name}</b>
          <small>${d.type}</small>
          <small>${d.time}</small>
        </div>
      </div>
    `;
  });
}

//////////////////////////////////////////////////////
// ================= SUBSCRIPTIONS ===================
//////////////////////////////////////////////////////

function addSubscription() {

  const name = get("subName");
  const plan = get("subPlan");

  if (!name || !plan) return alert("Fill all fields");

  let subs = load("subscriptions");

  subs.push({
    id: Date.now(),
    name,
    plan
  });

  save("subscriptions", subs);

  loadSubscriptions();

  document.getElementById("subName").value = "";
  document.getElementById("subPlan").value = "";
}

function loadSubscriptions() {

  let subs = load("subscriptions");

  const list = document.getElementById("subscriptionList");
  list.innerHTML = "";

  subs.forEach(d => {

    list.innerHTML += `
      <div class="member">
        <div class="member-info">
          <b>${d.name}</b>
          <small>${d.plan}</small>
        </div>
      </div>
    `;
  });
}

//////////////////////////////////////////////////////
// ================= WORKOUTS ========================
//////////////////////////////////////////////////////

function addWorkout() {

  const name = get("workoutName");
  const routine = get("workoutPlan");

  if (!name || !routine) return alert("Fill all fields");

  let workouts = load("workouts");

  workouts.push({
    id: Date.now(),
    name,
    routine
  });

  save("workouts", workouts);

  loadWorkouts();

  document.getElementById("workoutName").value = "";
  document.getElementById("workoutPlan").value = "";
}

function loadWorkouts() {

  let workouts = load("workouts");

  const list = document.getElementById("workoutList");
  list.innerHTML = "";

  workouts.forEach(d => {

    list.innerHTML += `
      <div class="member">
        <div class="member-info">
          <b>${d.name}</b>
          <small>${d.routine}</small>
        </div>
      </div>
    `;
  });
}

//////////////////////////////////////////////////////
// ================= TRAINERS ========================
//////////////////////////////////////////////////////

function addTrainer() {

  const name = get("trainerName");
  const specialization = get("trainerSpecialization");

  if (!name || !specialization) return alert("Fill fields");

  let trainers = load("trainers");

  trainers.push({
    id: Date.now(),
    name,
    specialization
  });

  save("trainers", trainers);

  loadTrainers();

  document.getElementById("trainerName").value = "";
  document.getElementById("trainerSpecialization").value = "";
}

function deleteTrainer(id) {

  let trainers = load("trainers");

  trainers = trainers.filter(t => t.id !== id);

  save("trainers", trainers);

  loadTrainers();
}

function loadTrainers() {

  let trainers = load("trainers");

  const list = document.getElementById("trainerList");
  list.innerHTML = "";

  trainers.forEach(d => {

    list.innerHTML += `
      <div class="member">
        <div class="member-info">
          <b>${d.name}</b>
          <small>${d.specialization}</small>
        </div>
      </div>
    `;
  });

  document.getElementById("totalTrainers").innerText = trainers.length;
}

//////////////////////////////////////////////////////
// ================= PAYMENTS ========================
//////////////////////////////////////////////////////

function addPayment() {

  const name = get("paymentName");
  const amount = get("paymentAmount");
  const method = get("paymentMethod");

  if (!name || !amount || !method) return alert("Fill all fields");

  let payments = load("payments");

  payments.push({
    id: Date.now(),
    name,
    amount: Number(amount),
    method
  });

  save("payments", payments);

  loadPayments();

  document.getElementById("paymentName").value = "";
  document.getElementById("paymentAmount").value = "";
  document.getElementById("paymentMethod").value = "";
}

function loadPayments() {

  let payments = load("payments");

  const list = document.getElementById("paymentList");
  list.innerHTML = "";

  let total = 0;

  payments.forEach(d => {

    total += d.amount;

    list.innerHTML += `
      <div class="member">
        <div class="member-info">
          <b>${d.name}</b>
          <small>₱${d.amount} • ${d.method}</small>
        </div>
      </div>
    `;
  });

  document.getElementById("totalRevenue").innerText =
    "₱" + total.toLocaleString();
}

//////////////////////////////////////////////////////
// ================= INIT + TYPING ===================
//////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {

  // ===== TYPING EFFECT =====
  const text = "Your Fitness Journey Starts Here";
  let i = 0;
  const el = document.getElementById("typingText");

  function typeEffect() {
    if (!el) return;

    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 40);
    }
  }

  typeEffect();

  // ===== LOAD ALL DATA =====
  loadMembers();
  loadAttendance();
  loadSubscriptions();
  loadWorkouts();
  loadTrainers();
  loadPayments();
});