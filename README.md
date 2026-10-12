# Streamlining IT Procurement: Automating Standard Laptop Orders with Flow Designer

This folder contains starter scripts and configuration instructions for a ServiceNow project.

## Important
ServiceNow Flow Designer flows, tables, Catalog Items, notifications, and ACLs are configured in the ServiceNow UI. They are not created by simply uploading these files. The scripts below are intended to be copied into the matching ServiceNow records.

## Files
- `01_table_fields.md` — custom table and field setup
- `02_laptop_request_client_script.js` — form onSubmit validation
- `03_laptop_request_initialize_business_rule.js` — initializes request status and order number
- `04_flow_designer_setup.md` — flow trigger, approval, branching, updates, and notifications
- `05_procurement_email_template.txt` — sample procurement email
- `06_status_tracking_business_rule.js` — status transition checks and date stamps
- `07_testing_checklist.md` — setup and test plan

## Suggested setup order
1. Create the `u_laptop_order` table and fields from `01_table_fields.md`.
2. Add the client script from `02_laptop_request_client_script.js`.
3. Add the insert Business Rule from `03_laptop_request_initialize_business_rule.js`.
4. Add the update Business Rule from `06_status_tracking_business_rule.js`.
5. Build and activate the flow using `04_flow_designer_setup.md`.
6. Configure email recipients and replace sample placeholders in `05_procurement_email_template.txt`.
7. Apply role-based access controls and run the tests in `07_testing_checklist.md`.

The sample assumes field names listed in `01_table_fields.md`. Validate API/action labels against your ServiceNow release and instance configuration.
