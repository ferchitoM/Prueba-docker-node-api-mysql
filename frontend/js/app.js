async function loadTable() {
    try {
        const response = await axios.get("http://localhost:3000/api/user");

        var html = "";
        for (let item of response.data) {
            html += `
                <tr>
                    <td> ${item["_id"]} </td>
                    <td>
                        <img width="50px" src="https://i.pravatar.cc/300?img=${item["_id"]}" class="avatar">
                    </td>
                    <td> ${item["firstName"]} </td>
                    <td> ${item["lastName"]} </td>
                    <td> ${item["email"]} </td>
                    <td>
                        <button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(${item["_id"]})">Edit</button>
                        <button type="button" class="btn btn-outline-danger" onclick="userDelete(${item["_id"]}, '${item["email"]}')">Del</button>
                    </td>
                </tr>`;
        }
        document.getElementById("mytable").innerHTML = html;
    } catch (e) {
        console.log(e);
    }
}

loadTable();

function showUserCreateBox() {
    Swal.fire({
        title: "Create user",
        html: `
            <input id="_id" type="hidden">
            <input id="firstName" class="swal2-input" placeholder="First">
            <input id="lastName" class="swal2-input" placeholder="Last">
            <input id="email" class="swal2-input" placeholder="Email">`,
        focusConfirm: false,
        preConfirm: () => {
            userCreate();
        },
    });
}

async function userCreate() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    try {
        const response = await axios.post("http://localhost:3000/api/user/", {
            firstName,
            lastName,
            email,
        });
        Swal.fire(response.data);
        loadTable();
    } catch (e) {
        console.log(e);
    }
}

async function showUserEditBox(_id) {
    try {
        const response = await axios.get("http://localhost:3000/api/user/" + _id);
        const user = response.data;
        Swal.fire({
            title: "Edit User",
            html:
                '<input id="_id" type="hidden" value=' +
                user["_id"] +
                ">" +
                '<input id="firstName" class="swal2-input" placeholder="First" value="' +
                user["firstName"] +
                '">' +
                '<input id="lastName" class="swal2-input" placeholder="Last" value="' +
                user["lastName"] +
                '">' +
                '<input id="email" class="swal2-input" placeholder="Email" value="' +
                user["email"] +
                '">',
            focusConfirm: false,
            preConfirm: () => {
                userEdit();
            },
        });
    } catch (e) {
        console.log(e);
    }
}

async function userEdit() {
    try {
        const _id = document.getElementById("_id").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;

        const response = await axios.put("http://localhost:3000/api/user/" + _id, {
            user: {
                _id,
                firstName,
                lastName,
                email,
            },
        });
        Swal.fire(response.data);
        loadTable();
    } catch (e) {
        console.log(e);
    }
}

function userDelete(id, email) {
    const continueDelete = async () => {
        try {
            const response = await axios.delete("http://localhost:3000/api/user/" + id);
            Swal.fire(response.data);
            loadTable();
        } catch (e) {
            console.log(e);
        }
    };

    Swal.fire({
        title: "Realmente deseas eliminar a " + email + "?",
        showCancelButton: true,
        confirmButtonText: "OK",
        preConfirm: continueDelete,
    });
}
