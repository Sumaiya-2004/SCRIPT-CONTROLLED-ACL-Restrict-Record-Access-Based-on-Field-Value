// ServiceNow Client Script
// Table: u_laptop_order
// Type: onSubmit
// Active: true

function onSubmit() {
    var requestedFor = g_form.getValue('u_requested_for');
    var manager = g_form.getValue('u_manager');
    var department = g_form.getValue('u_department');
    var laptopModel = g_form.getValue('u_laptop_model');
    var justification = g_form.getValue('u_justification');

    if (!requestedFor) {
        g_form.addErrorMessage('Please select the employee.');
        return false;
    }

    if (!manager) {
        g_form.addErrorMessage('Please select the manager.');
        return false;
    }

    if (!department || !department.trim()) {
        g_form.addErrorMessage('Please enter the department.');
        return false;
    }

    if (!laptopModel) {
        g_form.addErrorMessage('Please select a laptop model.');
        return false;
    }

    if (!justification || !justification.trim()) {
        g_form.addErrorMessage('Please provide the business justification.');
        return false;
    }

    return true;
}
