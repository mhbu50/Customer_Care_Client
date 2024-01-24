(() => {
  // ../customer_care_client/customer_care_client/public/js/main.bundle.js
  frappe.provide("havenir.ui.toolbar");
  console.log("webform.js loaded NEwewwe");
  havenir.ui.toolbar.help = function() {
    try {
      frappe.call({
        method: "frappe.client.get",
        args: {
          doctype: "Support URL Configuration",
          filters: {},
          fieldname: ["support_url"]
        },
        callback: function(response) {
          if (response.message && response.message.support_url) {
            var userName = frappe.session.user_fullname;
            var userEmail = frappe.session.user_email;
            var userNameJson = JSON.stringify(userName);
            var userEmailJson = JSON.stringify(userEmail);
            var target_url = response.message.support_url + "?user_name=" + encodeURIComponent(userNameJson) + "&user_email=" + encodeURIComponent(userEmailJson) + "&current_url=" + encodeURIComponent(window.location.href);
            window.open(target_url, "_blank");
          }
        }
      });
    } catch (e) {
      console.log(e);
    }
    return false;
  };
})();
//# sourceMappingURL=main.bundle.ZW6UAHJC.js.map
