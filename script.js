// ================= FIREBASE INIT =================
const firebaseConfig = {
  apiKey: "AIzaSyANj4skAzuE-gOd2F1W90DCWP9scsqJf5M",
  authDomain: "fittrack0814.firebaseapp.com",
  projectId: "fittrack0814",
  storageBucket: "fittrack0814.firebasestorage.app",
  messagingSenderId: "813666120484",
  appId: "1:813666120484:web:619bf2c2707d8478ffb9b1",
  measurementId: "G-SNCB18YQVK"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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


//////////////////////////////////////////////////////
// ================= MEMBERS =========================
//////////////////////////////////////////////////////

function addMember() {

  const name = get("name");
  const membership = get("membership");

  if (!name || !membership) {
    return alert("Fill all fields");
  }

  db.collection("members").add({

    name: name,
    membership: membership,

    status: "Active",

    joined: new Date().toLocaleDateString(),

    createdAt: firebase.firestore.FieldValue.serverTimestamp(),

    profileColor: [
      "#60a5fa",
      "#a78bfa",
      "#34d399",
      "#f472b6",
      "#f59e0b"
    ][Math.floor(Math.random() * 5)]

  });

  document.getElementById("name").value = "";
  document.getElementById("membership").value = "";
}


// DELETE MEMBER
function deleteMember(id) {
  db.collection("members").doc(id).delete();
}


// EDIT MEMBER
function editMember(id, name, membership) {

  const n = prompt("Name", name);
  const m = prompt("Membership", membership);

  if (n && m) {

    db.collection("members").doc(id).update({
      name: n,
      membership: m
    });

  }
}


// LOAD MEMBERS
db.collection("members").onSnapshot(snapshot => {

  const list = document.getElementById("memberList");

  if (!list) return;

  list.innerHTML = "";

  snapshot.forEach(doc => {

    const m = doc.data();

    list.innerHTML += `

      <div class="member">

        <div class="member-left">

          <div class="avatar"
            style="background:${m.profileColor}">
            ${m.name.charAt(0).toUpperCase()}
          </div>

          <div class="member-info">
            <b>${m.name}</b>
            <small>${m.membership}</small>
            <small>Joined: ${m.joined}</small>
          </div>

        </div>

        <div class="member-right">

          <span class="status">${m.status}</span>

          <div class="member-actions">

            <button class="edit-btn"
              onclick="editMember(
                '${doc.id}',
                '${m.name}',
                '${m.membership}'
              )">
              Edit
            </button>

            <button class="delete-btn"
              onclick="deleteMember('${doc.id}')">
              Delete
            </button>

          </div>

        </div>

      </div>

    `;
  });
});


//////////////////////////////////////////////////////
// ================= ATTENDANCE ======================
//////////////////////////////////////////////////////

function addAttendance() {

  const name = get("attName");

  if (!name) return alert("Enter member name");

  db.collection("attendance").add({

    name: name,
    type: "Time In",
    time: new Date().toLocaleString()

  });

  document.getElementById("attName").value = "";
}


function timeOutAttendance() {

  const name = get("attName");

  if (!name) return alert("Enter member name");

  db.collection("attendance").add({

    name: name,
    type: "Time Out",
    time: new Date().toLocaleString()

  });

  document.getElementById("attName").value = "";
}
// DELETE
function deleteAttendance(id) {
  db.collection("attendance").doc(id).delete();
}


// EDIT
function editAttendance(id, name, type) {

  const n = prompt("Name", name);
  const t = prompt("Type", type);

  if (n && t) {

    db.collection("attendance").doc(id).update({
      name: n,
      type: t
    });

  }
}


// LOAD
db.collection("attendance").onSnapshot(snapshot => {

  const list = document.getElementById("attendanceList");

  if (!list) return;

  list.innerHTML = "";

  snapshot.forEach(doc => {

    const d = doc.data();

    list.innerHTML += `

      <div class="member">

        <div class="member-info">
          <b>${d.name}</b>
          <small>${d.type}</small>
          <small>${d.time}</small>
        </div>

        <div class="member-actions">

          <button class="edit-btn"
            onclick="editAttendance(
              '${doc.id}',
              '${d.name}',
              '${d.type}'
            )">
            Edit
          </button>

          <button class="delete-btn"
            onclick="deleteAttendance('${doc.id}')">
            Delete
          </button>

        </div>

      </div>

    `;
  });
});

//////////////////////////////////////////////////////
// ================= SUBSCRIPTIONS ===================
//////////////////////////////////////////////////////

function addSubscription() {

  const name = get("subName");
  const plan = get("subPlan");

  if (!name || !plan) {
    return alert("Fill all fields");
  }

  db.collection("subscriptions").add({
    name,
    plan
  });

  document.getElementById("subName").value = "";
  document.getElementById("subPlan").value = "";
}
// DELETE
function deleteSubscription(id) {
  db.collection("subscriptions").doc(id).delete();
}


// EDIT
function editSubscription(id, name, plan) {

  const n = prompt("Name", name);
  const p = prompt("Plan", plan);

  if (n && p) {

    db.collection("subscriptions").doc(id).update({
      name: n,
      plan: p
    });

  }
}


// LOAD
db.collection("subscriptions").onSnapshot(snapshot => {

  const list = document.getElementById("subscriptionList");

  if (!list) return;

  list.innerHTML = "";

  snapshot.forEach(doc => {

    const d = doc.data();

    list.innerHTML += `

      <div class="member">

        <div class="member-info">
          <b>${d.name}</b>
          <small>${d.plan}</small>
        </div>

        <div class="member-actions">

          <button class="edit-btn"
            onclick="editSubscription(
              '${doc.id}',
              '${d.name}',
              '${d.plan}'
            )">
            Edit
          </button>

          <button class="delete-btn"
            onclick="deleteSubscription('${doc.id}')">
            Delete
          </button>

        </div>

      </div>

    `;
  });
});

//////////////////////////////////////////////////////
// ================= WORKOUTS ========================
//////////////////////////////////////////////////////

function addWorkout() {

  const name = get("workoutName");
  const routine = get("workoutPlan");

  if (!name || !routine) {
    return alert("Fill all fields");
  }

  db.collection("workouts").add({
    name,
    routine
  });

  document.getElementById("workoutName").value = "";
  document.getElementById("workoutPlan").value = "";
}


d// DELETE
function deleteWorkout(id) {
  db.collection("workouts").doc(id).delete();
}


// EDIT
function editWorkout(id, name, routine) {

  const n = prompt("Workout Name", name);
  const r = prompt("Routine", routine);

  if (n && r) {

    db.collection("workouts").doc(id).update({
      name: n,
      routine: r
    });

  }
}


// LOAD
db.collection("workouts").onSnapshot(snapshot => {

  const list = document.getElementById("workoutList");

  if (!list) return;

  list.innerHTML = "";

  snapshot.forEach(doc => {

    const d = doc.data();

    list.innerHTML += `

      <div class="member">

        <div class="member-info">
          <b>${d.name}</b>
          <small>${d.routine}</small>
        </div>

        <div class="member-actions">

          <button class="edit-btn"
            onclick="editWorkout(
              '${doc.id}',
              '${d.name}',
              '${d.routine}'
            )">
            Edit
          </button>

          <button class="delete-btn"
            onclick="deleteWorkout('${doc.id}')">
            Delete
          </button>

        </div>

      </div>

    `;
  });
});


//////////////////////////////////////////////////////
// ================= TRAINERS ========================
//////////////////////////////////////////////////////

function addTrainer() {

  const name = get("trainerName");
  const specialization = get("trainerSpecialization");

  if (!name || !specialization) {
    return alert("Fill fields");
  }

  db.collection("trainers").add({
    name,
    specialization
  });

  document.getElementById("trainerName").value = "";
  document.getElementById("trainerSpecialization").value = "";
}


function deleteTrainer(id) {
  db.collection("trainers").doc(id).delete();
}


function editTrainer(id, name, specialization) {

  const n = prompt("Name", name);
  const s = prompt("Specialization", specialization);

  if (n && s) {

    db.collection("trainers").doc(id).update({
      name: n,
      specialization: s
    });

  }
}


db.collection("trainers").onSnapshot(snapshot => {

  const list = document.getElementById("trainerList");

  if (!list) return;

  list.innerHTML = "";

  snapshot.forEach(doc => {

    const d = doc.data();

    list.innerHTML += `

      <div class="member">

        <div class="member-info">
          <b>${d.name}</b>
          <small>${d.specialization}</small>
        </div>

        <div class="member-actions">

          <button class="edit-btn"
            onclick="editTrainer(
              '${doc.id}',
              '${d.name}',
              '${d.specialization}'
            )">
            Edit
          </button>

          <button class="delete-btn"
            onclick="deleteTrainer('${doc.id}')">
            Delete
          </button>

        </div>

      </div>

    `;
  });
});


//////////////////////////////////////////////////////
// ================= PAYMENTS ========================
//////////////////////////////////////////////////////

function addPayment() {

  const name = get("paymentName");
  const amount = get("paymentAmount");
  const method = get("paymentMethod");

  if (!name || !amount || !method) {
    return alert("Fill all fields");
  }

  db.collection("payments").add({
    name,
    amount,
    method
  });

  document.getElementById("paymentName").value = "";
  document.getElementById("paymentAmount").value = "";
  document.getElementById("paymentMethod").value = "";
}


function deletePayment(id) {
  db.collection("payments").doc(id).delete();
}


function editPayment(id, name, amount, method) {

  const n = prompt("Name", name);
  const a = prompt("Amount", amount);
  const m = prompt("Method", method);

  if (n && a && m) {

    db.collection("payments").doc(id).update({
      name: n,
      amount: a,
      method: m
    });

  }
}


db.collection("payments").onSnapshot(snapshot => {

  const list = document.getElementById("paymentList");

  if (!list) return;

  list.innerHTML = "";

  snapshot.forEach(doc => {

    const d = doc.data();

    list.innerHTML += `

      <div class="member">

        <div class="member-info">
          <b>${d.name}</b>
          <small>₱${d.amount} • ${d.method}</small>
        </div>

        <div class="member-actions">

          <button class="edit-btn"
            onclick="editPayment(
              '${doc.id}',
              '${d.name}',
              '${d.amount}',
              '${d.method}'
            )">
            Edit
          </button>

          <button class="delete-btn"
            onclick="deletePayment('${doc.id}')">
            Delete
          </button>

        </div>

      </div>

    `;
  });
});


//////////////////////////////////////////////////////
// ================= DASHBOARD STATS ================
//////////////////////////////////////////////////////

db.collection("members").onSnapshot(snapshot => {
  document.getElementById("totalMembers").innerText =
    snapshot.size;
});


db.collection("trainers").onSnapshot(snapshot => {
  document.getElementById("totalTrainers").innerText =
    snapshot.size;
});


db.collection("payments").onSnapshot(snapshot => {

  let total = 0;

  snapshot.forEach(doc => {
    total += Number(doc.data().amount || 0);
  });

  document.getElementById("totalRevenue").innerText =
    "₱" + total.toLocaleString();

});


//////////////////////////////////////////////////////
// ================= TYPE EFFECT =====================
//////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {

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

});