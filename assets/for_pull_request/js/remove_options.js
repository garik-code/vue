function remove_options(type_of_subscription) {
    var warning_on_payment_selecting = document.getElementById("warning-on-first-step-" + type_of_subscription);

    document.getElementById("select-payment-" + type_of_subscription + "-step-first").style["display"] = "none";
    warning_on_payment_selecting.innerHTML = '';
}
