# Flow Designer setup — Laptop Procurement Automation

This file documents the UI configuration. Do not paste this file into a script editor.

## Create the flow
- Flow name: `Laptop Procurement Automation`
- Trigger: Record → Created
- Table: `Laptop Order [u_laptop_order]`
- Trigger only on creation to prevent update loops.

## Actions
1. **Ask for Approval**
   - Record: Trigger record
   - Approver: `u_manager`
   - Configure the action to wait for the approval outcome.
   - Confirm the exact output data pill names in your ServiceNow release.

2. **If / Else**
   - Condition: approval action result is approved.

3. **Approved branch**
   - Update Record: Trigger record
     - `u_status` = `approved`
     - `u_approval_state` = `approved`
   - Send Email to the configured IT Procurement group/distribution list.
   - The procurement team changes status to `ordered` and later `delivered`.

4. **Rejected branch**
   - Update Record: Trigger record
     - `u_status` = `rejected`
     - `u_approval_state` = `rejected`
   - Send Email to the requester.

5. Save and activate the flow.

## Prevent duplicate approvals
The trigger should be Record Created only, not Record Created or Updated. Updates made by the flow must not start a new approval flow.

## Catalog Item alternative
If your course requires a Service Catalog request:
- Create a Catalog Item with variables for requested for, manager, department, laptop model, and justification.
- Trigger the flow on Requested Item (`sc_req_item`) instead.
- Map Catalog Item variables using the data pills exposed by the trigger. Do not use `u_laptop_order` field names for catalog variables without adapting the flow.
