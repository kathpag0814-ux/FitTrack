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