function to_second_step_of_payment(type_of_subscription) {
    var submit_first_step=document.getElementById("submit-step-first-" + type_of_subscription + "-modal-wrapper");
    var dot_step_first=document.getElementById("step-first-" + type_of_subscription + "-payment");
    var dot_step_second=document.getElementById("step-second-" + type_of_subscription + "-payment");
    var under_steps_title=document.getElementById("under-steps-title-" + type_of_subscription);
    var action_back=document.getElementById("kt-subscribe-v1__action_back_" + type_of_subscription);
    var action_next=document.getElementById("submit-step-first-" + type_of_subscription + "-modal-wrapper");
    var form_group_select=document.getElementById("form-group-select-payment-" + type_of_subscription + "-step-first");
    var select_payment=document.getElementById("select-payment-" + type_of_subscription + "-step-first");
    var is_payment_selected = document.getElementById("form-group-select-payment-" + type_of_subscription + "-step-first").innerHTML;
    var warning_on_payment_selecting = document.getElementById("warning-on-first-step-" + type_of_subscription);
    if (['Sberbank', 'Tinkoff'].includes(is_payment_selected)) {
        warning_on_payment_selecting.innerHTML = '';
        dot_step_first.classList.add("dot-non-active");
        dot_step_first.classList.remove("dot-active");

        dot_step_second.classList.remove("dot-non-active");
        dot_step_second.classList.add("dot-active");

        under_steps_title.innerHTML = "Account number";
        action_back.style["display"] = "block";
        action_back.innerHTML = "Back";
        action_next.innerHTML = "PAY";
        form_group_select.style["display"] = "none";
        select_payment.style["display"] = "none";

        var form_group_for_account_number_input = document.createElement("div");
        form_group_for_account_number_input.classList.add("form-group", "mt-3", "mb-5");
        form_group_for_account_number_input.setAttribute("id", "form-group-account-number-" + type_of_subscription + "-step-second");
        form_group_for_account_number_input.setAttribute("style", "display: block;");

        var input_account_number_step_second = document.createElement('input');
        input_account_number_step_second.classList.add('form-control', 'mt-1', 'mb-5');
        input_account_number_step_second.setAttribute("type", "text");
        input_account_number_step_second.setAttribute("placeholder", "Enter account number");
        input_account_number_step_second.setAttribute("id", "input-account-number-" + type_of_subscription + "-step-second");
        input_account_number_step_second.setAttribute("name", "input-account-number-" + type_of_subscription + "-step-second");
        form_group_for_account_number_input.appendChild(input_account_number_step_second);

        var space = document.createElement("br");
        form_group_for_account_number_input.appendChild(space);

        var danger_icon = document.createElement("i");
        danger_icon.classList.add("fa", "fa-exclamation-circle", "fa-3x", "mb-2");
        danger_icon.setAttribute("style", "opacity: 0.3");
        danger_icon.setAttribute("aria-hidden", "true");
        form_group_for_account_number_input.appendChild(danger_icon);

        var text_under_danger_icon_step_second = document.createElement("div");
        text_under_danger_icon_step_second.classList.add("text-under-danger-icon-step-second", "mb-5");
        text_under_danger_icon_step_second.setAttribute("style", "text-align:justify;");

        var wrapper_text_under_danger_icon_step_second = document.createElement("div");
        wrapper_text_under_danger_icon_step_second.classList.add("wrapper-text-under-danger-icon-step-second");
        wrapper_text_under_danger_icon_step_second.innerHTML = "<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facere facilis numquam quibusdam commodi voluptatum incidunt, vero, eum ratione est maiores ut non voluptatibus hic possimus, quaerat repudiandae culpa. Eveniet.<br>";
        text_under_danger_icon_step_second.appendChild(wrapper_text_under_danger_icon_step_second);
        form_group_for_account_number_input.appendChild(text_under_danger_icon_step_second);

        var reverse_timer_under_text_step_second_text = document.createElement("span");
        reverse_timer_under_text_step_second_text.setAttribute("style", "opacity: 0.5");
        reverse_timer_under_text_step_second_text.id = "timer-text";
        reverse_timer_under_text_step_second_text.innerHTML = "Time left<br>";
        form_group_for_account_number_input.appendChild(reverse_timer_under_text_step_second_text);

        var reverse_timer_under_text_step_second = document.createElement("span");
        reverse_timer_under_text_step_second.setAttribute("style", "opacity: 0.5");
        reverse_timer_under_text_step_second.id = "timer-customer";
        form_group_for_account_number_input.appendChild(reverse_timer_under_text_step_second);

        var modal_body_id_step_first = "modal-body-" + type_of_subscription;
        document.getElementById(modal_body_id_step_first).appendChild(form_group_for_account_number_input);

        submit_first_step.setAttribute("id", "submit-step-second-" + type_of_subscription + "-modal-wrapper");
        submit_first_step.setAttribute("onclick", "to_third_step_of_payment(\'" + type_of_subscription + "\')");

        var timer = document.getElementById("timer-customer"),
            mins = 30,
            secs = 0;

        function countDown() {
            if (secs || mins) {
                setTimeout(countDown, 1000);
            }
            timer.innerHTML = mins + ":" + (secs.toString().length < 2 ? "0" + secs : secs);
            secs -= 1;
            if (secs < 0) {
                mins -= 1;
                secs = 59;
            }
        }

        countDown();

    } else {
        warning_on_payment_selecting.innerHTML = 'You should choose something';
    }
}
