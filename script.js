// ================= FIREBASE INIT =================

const firebaseConfig = {
  apiKey: "AIzaSyDFT6PqQTJYCJGnQUbd5H5GsCZ_OtBDDsU",
  authDomain: "fittrack1234.firebaseapp.com",
  projectId: "fittrack1234",
  storageBucket: "fittrack1234.firebasestorage.app",
  messagingSenderId: "458942475044",
  appId: "1:458942475044:web:60cb95b7a2c8f4dd4121b1",
  measurementId: "G-V3Z3QBBH14"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

console.log("Firebase Connected");


// ================= SHOW SECTION =================

function showSection(id) {

  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}


// ================= SAFE GET =================

function get(id) {
  return document.getElementById(id).value.trim();
}


//////////////////////////////////////////////////////
// ================= MEMBERS =========================
//////////////////////////////////////////////////////

function addMember() {

  const name = get("name");
  const membership = get("membership");

  if (!name || !membership) {
    alert("Fill all fields");
    return;
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

  })

  .then(() => {

    console.log("Member Added");

    document.getElementById("name").value = "";
    document.getElementById("membership").value = "";

  })

  .catch(error => {

    console.error(error);

    alert(error.message);

  });
}


// DELETE MEMBER

function deleteMember(id) {

  db.collection("members")
    .doc(id)
    .delete()
    .catch(error => {
      console.error(error);
    });
}


// EDIT MEMBER

function editMember(id, oldName, oldMembership) {

  const newName = prompt("Edit Name", oldName);

  const newMembership = prompt(
    "Edit Membership",
    oldMembership
  );

  if (!newName || !newMembership) return;

  db.collection("members")
    .doc(id)
    .update({

      name: newName,
      membership: newMembership

    })
    .catch(error => {
      console.error(error);
    });
}


// LOAD MEMBERS

db.collection("members").onSnapshot(snapshot => {

  const list = document.getElementById("memberList");

  if (!list) return;

  list.innerHTML = "";

  document.getElementById("totalMembers").innerText =
    snapshot.size;

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

            <small>Status: ${m.status}</small>

            <small>Joined: ${m.joined}</small>

          </div>

        </div>

        <div class="member-right">

          <span class="status">
            ${m.status}
          </span>

          <div class="member-actions">

            <button
              class="edit-btn"
              onclick="editMember(
                '${doc.id}',
                '${m.name}',
                '${m.membership}'
              )">
              Edit
            </button>

            <button
              class="delete-btn"
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

  if (!name) {
    alert("Enter member name");
    return;
  }

  db.collection("attendance").add({

    name: name,
    type: "Time In",
    time: new Date().toLocaleString()

  });

  document.getElementById("attName").value = "";
}


function timeOutAttendance() {

  const name = get("attName");

  if (!name) {
    alert("Enter member name");
    return;
  }

  db.collection("attendance").add({

    name: name,
    type: "Time Out",
    time: new Date().toLocaleString()

  });

  document.getElementById("attName").value = "";
}


db.collection("attendance").onSnapshot(snapshot => {

  const list = document.getElementById("attendanceList");

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
    alert("Fill all fields");
    return;
  }

  db.collection("subscriptions").add({

    name: name,
    plan: plan

  });

  document.getElementById("subName").value = "";
  document.getElementById("subPlan").value = "";
}


db.collection("subscriptions").onSnapshot(snapshot => {

  const list = document.getElementById("subscriptionList");

  list.innerHTML = "";

  snapshot.forEach(doc => {

    const d = doc.data();

    list.innerHTML += `

      <div class="member">

        <div class="member-info">

          <b>${d.name}</b>

          <small>${d.plan}</small>

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
    alert("Fill all fields");
    return;
  }

  db.collection("workouts").add({

    name: name,
    routine: routine

  });

  document.getElementById("workoutName").value = "";
  document.getElementById("workoutPlan").value = "";
}


db.collection("workouts").onSnapshot(snapshot => {

  const list = document.getElementById("workoutList");

  list.innerHTML = "";

  snapshot.forEach(doc => {

    const d = doc.data();

    list.innerHTML += `

      <div class="member">

        <div class="member-info">

          <b>${d.name}</b>

          <small>${d.routine}</small>

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
    alert("Fill all fields");
    return;
  }

  db.collection("trainers").add({

    name: name,
    specialization: specialization

  });

  document.getElementById("trainerName").value = "";
  document.getElementById("trainerSpecialization").value = "";
}


function deleteTrainer(id) {

  db.collection("trainers")
    .doc(id)
    .delete();
}


function editTrainer(id, oldName, oldSpec) {

  const newName = prompt("Edit Name", oldName);

  const newSpec = prompt(
    "Edit Specialization",
    oldSpec
  );

  if (!newName || !newSpec) return;

  db.collection("trainers")
    .doc(id)
    .update({

      name: newName,
      specialization: newSpec

    });
}


db.collection("trainers").onSnapshot(snapshot => {

  const list = document.getElementById("trainerList");

  list.innerHTML = "";

  document.getElementById("totalTrainers").innerText =
    snapshot.size;

  snapshot.forEach(doc => {

    const d = doc.data();

    list.innerHTML += `

      <div class="member">

        <div class="member-info">

          <b>${d.name}</b>

          <small>${d.specialization}</small>

        </div>

        <div class="member-actions">

          <button
            class="edit-btn"
            onclick="editTrainer(
              '${doc.id}',
              '${d.name}',
              '${d.specialization}'
            )">
            Edit
          </button>

          <button
            class="delete-btn"
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
    alert("Fill all fields");
    return;
  }

  db.collection("payments").add({

    name: name,
    amount: Number(amount),
    method: method

  });

  document.getElementById("paymentName").value = "";
  document.getElementById("paymentAmount").value = "";
  document.getElementById("paymentMethod").value = "";
}


function deletePayment(id) {

  db.collection("payments")
    .doc(id)
    .delete();
}


function editPayment(id, oldName, oldAmount, oldMethod) {

  const newName = prompt("Edit Name", oldName);

  const newAmount = prompt(
    "Edit Amount",
    oldAmount
  );

  const newMethod = prompt(
    "Edit Method",
    oldMethod
  );

  if (!newName || !newAmount || !newMethod) return;

  db.collection("payments")
    .doc(id)
    .update({

      name: newName,
      amount: Number(newAmount),
      method: newMethod

    });
}


db.collection("payments").onSnapshot(snapshot => {

  const list = document.getElementById("paymentList");

  list.innerHTML = "";

  let total = 0;

  snapshot.forEach(doc => {

    const d = doc.data();

    total += Number(d.amount || 0);

    list.innerHTML += `

      <div class="member">

        <div class="member-info">

          <b>${d.name}</b>

          <small>
            ₱${d.amount} • ${d.method}
          </small>

        </div>

        <div class="member-actions">

          <button
            class="edit-btn"
            onclick="editPayment(
              '${doc.id}',
              '${d.name}',
              '${d.amount}',
              '${d.method}'
            )">
            Edit
          </button>

          <button
            class="delete-btn"
            onclick="deletePayment('${doc.id}')">
            Delete
          </button>

        </div>

      </div>

    `;
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