frappe.provide("havenir.ui.toolbar");

console.log("webform.js loaded NEwewwe");


havenir.ui.toolbar.help = function () {
    try {
        // Make an asynchronous call to get the support URL from the server
        frappe.call({
            method: 'frappe.client.get',
            args: {
                doctype: 'Support URL Configuration',  // Replace with your actual doctype name
                filters: {},
                fieldname: ['support_url']
            },
            callback: function (response) {
                if (response.message && response.message.support_url) {
                    // Get the current user's data from Frappe session
                    var userName = frappe.session.user_fullname;
                    var userEmail = frappe.session.user_email;

                    // Convert the user data to a JSON string
                    var userNameJson = JSON.stringify(userName);
                    var userEmailJson = JSON.stringify(userEmail);

                    // Build the target URL with the user data and support URL as query parameters
                    var target_url = response.message.support_url +
                        "?user_name=" + encodeURIComponent(userNameJson) +
                        "&user_email=" + encodeURIComponent(userEmailJson) +
                        "&current_url=" + encodeURIComponent(window.location.href);

                    // Open the target URL in a new tab or window
                    window.open(target_url, '_blank');
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
    return false;
};


