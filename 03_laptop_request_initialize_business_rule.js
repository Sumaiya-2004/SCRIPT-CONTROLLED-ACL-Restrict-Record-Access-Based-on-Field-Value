// ServiceNow Business Rule
// Name: Initialize Laptop Request
// Table: u_laptop_order
// When: before
// Insert: true
// Update: false

(function executeRule(current, previous) {
    if (gs.nil(current.u_requested_for) ||
        gs.nil(current.u_manager) ||
        gs.nil(current.u_department) ||
        gs.nil(current.u_laptop_model) ||
        gs.nil(current.u_justification)) {

        gs.addErrorMessage('Complete all required laptop request fields.');
        current.setAbortAction(true);
        return;
    }

    // The flow starts after insert and requests manager approval.
    current.u_status = 'pending_approval';
    current.u_approval_state = 'requested';

    if (gs.nil(current.u_order_number)) {
        current.u_order_number = 'LAP-' + current.getUniqueValue();
    }
})(current, previous);
