# Setup and testing checklist

## Setup
- [ ] Create `u_laptop_order` and fields from `01_table_fields.md`.
- [ ] Configure choice values exactly as documented.
- [ ] Add fields to the form; make required inputs mandatory.
- [ ] Create the onSubmit Client Script from `02_laptop_request_client_script.js`.
- [ ] Create the insert Business Rule from `03_laptop_request_initialize_business_rule.js`.
- [ ] Create the update Business Rule from `06_status_tracking_business_rule.js`.
- [ ] Configure the flow as documented in `04_flow_designer_setup.md`.
- [ ] Configure procurement and requester email actions.
- [ ] Configure ACLs/roles so requesters cannot alter approval-controlled fields.
- [ ] Activate and test the flow.

## Test cases
1. **Valid request:** record is created with `pending_approval` and `requested`.
2. **Missing required field:** submission is blocked by client/server validation.
3. **Manager approves:** approval state becomes `approved`, status becomes `approved`, procurement notification is sent.
4. **Manager rejects:** approval state and status become `rejected`, requester is notified.
5. **Procurement orders laptop:** authorized procurement user sets status to `ordered`; ordered date is populated.
6. **Laptop delivered:** authorized procurement user sets status to `delivered`; delivery date is populated.
7. **Attempt to order without approval:** update is blocked.
8. **Unauthorized status update:** access is denied by configured ACLs/roles.

## Security notes
The scripts are starter examples, not a complete security implementation. Configure ACLs and roles for your instance. Do not rely only on read-only form fields or Client Scripts for authorization. Test with separate requester, manager, and procurement accounts.
