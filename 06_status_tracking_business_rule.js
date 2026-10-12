// ServiceNow Business Rule
// Name: Track Laptop Order Status
// Table: u_laptop_order
// When: before
// Insert: false
// Update: true

(function executeRule(current, previous) {
    if (!current.u_status.changes()) {
        return;
    }

    var status = current.u_status.toString();
    var approval = current.u_approval_state.toString();

    // Approval is required before ordering or delivery.
    if ((status == 'approved' ||
         status == 'ordered' ||
         status == 'delivered') &&
        approval != 'approved') {

        gs.addErrorMessage('Manager approval is required before procurement.');
        current.setAbortAction(true);
        return;
    }

    // Rejected requests cannot progress to procurement.
    if (approval == 'rejected' &&
        (status == 'approved' ||
         status == 'ordered' ||
         status == 'delivered')) {

        gs.addErrorMessage('A rejected request cannot proceed to procurement.');
        current.setAbortAction(true);
        return;
    }

    if (status == 'ordered' && gs.nil(current.u_ordered_date)) {
        current.u_ordered_date = gs.nowDate();
    }

    if (status == 'delivered' && gs.nil(current.u_delivery_date)) {
        current.u_delivery_date = gs.nowDate();
    }
})(current, previous);
