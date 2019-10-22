function return_to_step_first(type_of_subscription) {
    var back_to_first_step_button=document.getElementById("kt-subscribe-v1__action_back_" + type_of_subscription);
    var dot_step_first=document.getElementById("step-first-" + type_of_subscription + "-payment");
    var dot_step_second=document.getElementById("step-second-" + type_of_subscription + "-payment");
    var form_group_select=document.getElementById("form-group-select-payment-" + type_of_subscription + "-step-first");
    var submit_second_step=document.getElementById("submit-step-second-" + type_of_subscription + "-modal-wrapper");
    var under_steps_title=document.getElementById("under-steps-title-" + type_of_subscription);

    dot_step_first.classList.add("dot-active");
    dot_step_first.classList.remove("dot-non-active");

    dot_step_second.classList.remove("dot-active");
    dot_step_second.classList.add("dot-non-active");

    back_to_first_step_button.style["display"] = "none";
    back_to_first_step_button.innerHTML = "";

    under_steps_title.innerHTML = "Select outgoing invoice";

    form_group_select.innerHTML = "Select Payment Method";

    submit_second_step.setAttribute("id", 'submit-step-first-' + type_of_subscription + '-modal-wrapper');
    submit_second_step.setAttribute("onclick", "to_second_step_of_payment(\'" + type_of_subscription + "\')");
    submit_second_step.innerHTML = "NEXT";

    under_steps_title.innerHTML = "Select outgoing invoice";

    document.getElementById("form-group-account-number-" + type_of_subscription + "-step-second").remove();
    document.getElementById("form-group-select-payment-" + type_of_subscription + "-step-first").style["display"] = "block";
    document.getElementById("select-payment-" + type_of_subscription + "-step-first").style["display"] = "block";
    document.getElementById("sberbank-select-payment-" + type_of_subscription + "-step-first").style["display"] = "flex";
    document.getElementById("tinkoff-select-payment-" + type_of_subscription + "-step-first").style["display"] = "flex";
}
