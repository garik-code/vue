function to_third_step_of_payment(type_of_subscription) {
    var submit_second_step = document.getElementById("submit-step-second-" + type_of_subscription + "-modal-wrapper");
    var dot_step_second=document.getElementById("step-second-" + type_of_subscription + "-payment");
    var dot_step_third=document.getElementById("step-third-" + type_of_subscription + "-payment");
    var under_steps_title=document.getElementById("under-steps-title-" + type_of_subscription);
    var form_group=document.getElementById("form-group-account-number-" + type_of_subscription + "-step-second");
    var action_back=document.getElementById("kt-subscribe-v1__action_back_" + type_of_subscription);
    var action_next=document.getElementById("submit-step-first-" + type_of_subscription + "-modal-wrapper");
    var action_div=document.getElementById("kt-subscribe-v1__actions_" + type_of_subscription);

    dot_step_second.classList.add("dot-non-active");
    dot_step_second.classList.remove("dot-active");

    dot_step_third.classList.remove("dot-non-active");
    dot_step_third.classList.add("dot-active");

    under_steps_title.innerHTML = "";
    action_back.innerHTML = "Back";

    form_group.style["display"] = "none";
    action_div.style["display"] = "none";

    var success_div_third_step = document.createElement('div');

    var success_icon = document.createElement('i');
    success_icon.classList.add("fas", "fa-check-circle", "fa-4x", "mt-5", "success-icon-third-step");
    success_icon.setAttribute("aria-hidden", "true");
    success_div_third_step.appendChild(success_icon);

    var success_text = document.createElement('p');
    success_text.classList.add("success-text-third-step", "mt-5");
    success_text.innerHTML = "Operation completed <br> successfully"
    success_div_third_step.appendChild(success_text);

    var modal_body_id_step_second = "modal-body-" + type_of_subscription;
    document.getElementById(modal_body_id_step_second).appendChild(success_div_third_step);

    var last_step_close_button = document.getElementById('not-last-step-' + type_of_subscription);
    last_step_close_button.setAttribute('id', 'last-step-' + type_of_subscription);

    // delete last step of payment
    last_step_close_button.onclick = function() {
        last_step_close_button.setAttribute('id', 'not-last-step-' + type_of_subscription);
        form_group.remove();
        success_div_third_step.remove();
        var back_to_first_step_button=document.getElementById("kt-subscribe-v1__action_back_" + type_of_subscription);
        var dot_step_first=document.getElementById("step-first-" + type_of_subscription + "-payment");
        var dot_step_third=document.getElementById("step-third-" + type_of_subscription + "-payment");
        var form_group_select=document.getElementById("form-group-select-payment-" + type_of_subscription + "-step-first");
        var submit_second_step=document.getElementById("submit-step-second-" + type_of_subscription + "-modal-wrapper");
        var under_steps_title=document.getElementById("under-steps-title-" + type_of_subscription);

        dot_step_first.classList.add("dot-active");
        dot_step_first.classList.remove("dot-non-active");

        dot_step_third.classList.remove("dot-active");
        dot_step_third.classList.add("dot-non-active");

        back_to_first_step_button.style["display"] = "none";
        back_to_first_step_button.innerHTML = "";

        under_steps_title.innerHTML = "Select outgoing invoice";

        form_group_select.innerHTML = "Select Payment Method";

        submit_second_step.setAttribute("id", 'submit-step-first-' + type_of_subscription + '-modal-wrapper');
        submit_second_step.setAttribute("onclick", "to_second_step_of_payment(\'" + type_of_subscription + "\')");
        submit_second_step.innerHTML = "NEXT";

        under_steps_title.innerHTML = "Select outgoing invoice";
        document.getElementById('form-group-select-payment-' + type_of_subscription + '-step-first').style['display'] = 'block';
        document.getElementById('kt-subscribe-v1__actions_' + type_of_subscription).style['display'] = 'flex';

    }

    var last_step_close_carousel_button = document.getElementById('not-last-step-' + type_of_subscription + '-carousel');
    last_step_close_button.setAttribute('id', 'last-step-' + type_of_subscription + '-carousel');

    //delete last step of carousel payment

    last_step_close_carousel_button.onclick = function() {
        last_step_close_button.setAttribute('id', 'not-last-step-' + type_of_subscription + '-carousel');
        form_group.remove();
        success_div_third_step.remove();
        var back_to_first_step_button=document.getElementById("kt-subscribe-v1__action_back_" + type_of_subscription);
        var dot_step_first=document.getElementById("step-first-" + type_of_subscription + "-payment");
        var dot_step_third=document.getElementById("step-third-" + type_of_subscription + "-payment");
        var form_group_select=document.getElementById("form-group-select-payment-" + type_of_subscription + "-step-first");
        var submit_second_step=document.getElementById("submit-step-second-" + type_of_subscription + "-modal-wrapper");
        var under_steps_title=document.getElementById("under-steps-title-" + type_of_subscription);

        dot_step_first.classList.add("dot-active");
        dot_step_first.classList.remove("dot-non-active");

        dot_step_third.classList.remove("dot-active");
        dot_step_third.classList.add("dot-non-active");

        back_to_first_step_button.style["display"] = "none";
        back_to_first_step_button.innerHTML = "";

        under_steps_title.innerHTML = "Select outgoing invoice";

        form_group_select.innerHTML = "Select Payment Method";

        submit_second_step.setAttribute("id", 'submit-step-first-' + type_of_subscription + '-modal-wrapper');
        submit_second_step.setAttribute("onclick", "to_second_step_of_payment(\'" + type_of_subscription + "\')");
        submit_second_step.innerHTML = "NEXT";

        under_steps_title.innerHTML = "Select outgoing invoice";
        document.getElementById('form-group-select-payment-' + type_of_subscription + '-step-first').style['display'] = 'block';
        document.getElementById('kt-subscribe-v1__actions_' + type_of_subscription).style['display'] = 'flex';

    }
}
