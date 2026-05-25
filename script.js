// ================= SUPABASE INIT =================

const supabaseUrl = "YOUR_SUPABASE_URL";

const supabaseKey = "YOUR_SUPABASE_ANON_KEY";

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


//////////////////////////////////////////////////////
// ================= MEMBERS =========================
//////////////////////////////////////////////////////

async function addMember() {

  const name = get("name");
  const membership = get("membership");

  if (!name || !membership) {
    return alert("Fill all fields");
  }

  const { error } = await supabaseClient
    .from("members")
    .insert([
      {
        name: name,
        membership: membership
      }
    ]);

  if (error) {
    console.log(error);
    return alert("Error adding member");
  }

  loadMembers();

  document.getElementById("name").value = "";
  document.getElementById("membership").value = "";
}


async function deleteMember(id) {

  await supabaseClient
    .from("members")
    .delete()
    .eq("id", id);

  loadMembers();
}


async function editMember(id, name, membership) {

  const n = prompt("Name", name);
  const m = prompt("Membership", membership);

  if (n && m) {

    await supabaseClient
      .from("members")
      .update({
        name: n,
        membership: m
      })
      .eq("id", id);

    loadMembers();
  }
}


async function loadMembers() {

  const { data } = await supabaseClient
    .from("members")
    .select("*");

  const list = document.getElementById("memberList");

  if (!list) return;

  list.innerHTML = "";

  data.forEach(m => {

    list.innerHTML += `

      <div class="member">

        <div class="member-info">
          <b>${m.name}</b>
          <small>${m.membership}</small>
        </div>

        <div class="member-actions">

          <button class="edit-btn"
            onclick="editMember(
              '${m.id}',
              '${m.name}',
              '${m.membership}'
            )">
            Edit
          </button>

          <button class="delete-btn"
            onclick="deleteMember('${m.id}')">
            Delete
          </button>

        </div>

      </div>

    `;
  });

  document.getElementById("totalMembers").innerText =
    data.length;
}


//////////////////////////////////////////////////////
// ================= ATTENDANCE ======================
//////////////////////////////////////////////////////

async function addAttendance() {

  const name = get("attName");

  if (!name) return alert("Enter member name");

  await supabaseClient
    .from("attendance")
    .insert([
      {
        name: name,
        type: "Time In",
        time: new Date().toLocaleString()
      }
    ]);

  loadAttendance();

  document.getElementById("attName").value = "";
}


async function timeOutAttendance() {

  const name = get("attName");

  if (!name) return alert("Enter member name");

  await supabaseClient
    .from("attendance")
    .insert([
      {
        name: name,
        type: "Time Out",
        time: new Date().toLocaleString()
      }
    ]);

  loadAttendance();

  document.getElementById("attName").value = "";
}


async function loadAttendance() {

  const { data } = await supabaseClient
    .from("attendance")
    .select("*");

  const list = document.getElementById("attendanceList");

  if (!list) return;

  list.innerHTML = "";

  data.forEach(d => {

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

async function addSubscription() {

  const name = get("subName");
  const plan = get("subPlan");

  if (!name || !plan) {
    return alert("Fill all fields");
  }

  await supabaseClient
    .from("subscriptions")
    .insert([
      {
        name: name,
        plan: plan
      }
    ]);

  loadSubscriptions();

  document.getElementById("subName").value = "";
  document.getElementById("subPlan").value = "";
}


async function loadSubscriptions() {

  const { data } = await supabaseClient
    .from("subscriptions")
    .select("*");

  const list = document.getElementById("subscriptionList");

  if (!list) return;

  list.innerHTML = "";

  data.forEach(d => {

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

async function addWorkout() {

  const name = get("workoutName");
  const routine = get("workoutPlan");

  if (!name || !routine) {
    return alert("Fill all fields");
  }

  await supabaseClient
    .from("workouts")
    .insert([
      {
        name: name,
        routine: routine
      }
    ]);

  loadWorkouts();

  document.getElementById("workoutName").value = "";
  document.getElementById("workoutPlan").value = "";
}


async function loadWorkouts() {

  const { data } = await supabaseClient
    .from("workouts")
    .select("*");

  const list = document.getElementById("workoutList");

  if (!list) return;

  list.innerHTML = "";

  data.forEach(d => {

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

async function addTrainer() {

  const name = get("trainerName");
  const specialization = get("trainerSpecialization");

  if (!name || !specialization) {
    return alert("Fill fields");
  }

  await supabaseClient
    .from("trainers")
    .insert([
      {
        name: name,
        specialization: specialization
      }
    ]);

  loadTrainers();

  document.getElementById("trainerName").value = "";
  document.getElementById("trainerSpecialization").value = "";
}


async function deleteTrainer(id) {

  await supabaseClient
    .from("trainers")
    .delete()
    .eq("id", id);

  loadTrainers();
}


async function editTrainer(id, name, specialization) {

  const n = prompt("Name", name);
  const s = prompt("Specialization", specialization);

  if (n && s) {

    await supabaseClient
      .from("trainers")
      .update({
        name: n,
        specialization: s
      })
      .eq("id", id);

    loadTrainers();
  }
}


async function loadTrainers() {

  const { data } = await supabaseClient
    .from("trainers")
    .select("*");

  const list = document.getElementById("trainerList");

  if (!list) return;

  list.innerHTML = "";

  data.forEach(d => {

    list.innerHTML += `

      <div class="member">

        <div class="member-info">
          <b>${d.name}</b>
          <small>${d.specialization}</small>
        </div>

        <div class="member-actions">

          <button class="edit-btn"
            onclick="editTrainer(
              '${d.id}',
              '${d.name}',
              '${d.specialization}'
            )">
            Edit
          </button>

          <button class="delete-btn"
            onclick="deleteTrainer('${d.id}')">
            Delete
          </button>

        </div>

      </div>

    `;
  });

  document.getElementById("totalTrainers").innerText =
    data.length;
}


//////////////////////////////////////////////////////
// ================= PAYMENTS ========================
//////////////////////////////////////////////////////

async function addPayment() {

  const name = get("paymentName");
  const amount = get("paymentAmount");
  const method = get("paymentMethod");

  if (!name || !amount || !method) {
    return alert("Fill all fields");
  }

  await supabaseClient
    .from("payments")
    .insert([
      {
        name: name,
        amount: amount,
        method: method
      }
    ]);

  loadPayments();

  document.getElementById("paymentName").value = "";
  document.getElementById("paymentAmount").value = "";
  document.getElementById("paymentMethod").value = "";
}


async function deletePayment(id) {

  await supabaseClient
    .from("payments")
    .delete()
    .eq("id", id);

  loadPayments();
}


async function editPayment(id, name, amount, method) {

  const n = prompt("Name", name);
  const a = prompt("Amount", amount);
  const m = prompt("Method", method);

  if (n && a && m) {

    await supabaseClient
      .from("payments")
      .update({
        name: n,
        amount: a,
        method: m
      })
      .eq("id", id);

    loadPayments();
  }
}


async function loadPayments() {

  const { data } = await supabaseClient
    .from("payments")
    .select("*");

  const list = document.getElementById("paymentList");

  if (!list) return;

  list.innerHTML = "";

  let total = 0;

  data.forEach(d => {

    total += Number(d.amount || 0);

    list.innerHTML += `

      <div class="member">

        <div class="member-info">
          <b>${d.name}</b>
          <small>₱${d.amount} • ${d.method}</small>
        </div>

        <div class="member-actions">

          <button class="edit-btn"
            onclick="editPayment(
              '${d.id}',
              '${d.name}',
              '${d.amount}',
              '${d.method}'
            )">
            Edit
          </button>

          <button class="delete-btn"
            onclick="deletePayment('${d.id}')">
            Delete
          </button>

        </div>

      </div>

    `;
  });

  document.getElementById("totalRevenue").innerText =
    "₱" + total.toLocaleString();
}


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

  loadMembers();
  loadAttendance();
  loadSubscriptions();
  loadWorkouts();
  loadTrainers();
  loadPayments();

});