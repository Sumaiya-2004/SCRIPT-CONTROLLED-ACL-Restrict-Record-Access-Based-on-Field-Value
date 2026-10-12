# Table and field setup

Create a custom table from **System Definition → Tables**.

- Label: `Laptop Order`
- Name: `u_laptop_order`
- Extends: `Task` if available and appropriate for your instance; otherwise use a standalone custom table.

Create these fields:

| Label | Name | Type / configuration |
|---|---|---|
| Requested For | `u_requested_for` | Reference → User (`sys_user`) |
| Manager | `u_manager` | Reference → User (`sys_user`) |
| Department | `u_department` | String |
| Laptop Model | `u_laptop_model` | Choice |
| Business Justification | `u_justification` | Multi-line text / String |
| Status | `u_status` | Choice |
| Approval State | `u_approval_state` | Choice |
| Procurement Group | `u_procurement_group` | Reference → Group (`sys_user_group`) |
| Order Number | `u_order_number` | String |
| Ordered Date | `u_ordered_date` | Date |
| Delivery Date | `u_delivery_date` | Date |

## Choice values

`u_laptop_model`
- Standard Laptop — `standard`
- Developer Laptop — `developer`
- Business Laptop — `business`

`u_status`
- Submitted — `submitted`
- Pending Approval — `pending_approval`
- Approved — `approved`
- Rejected — `rejected`
- Ordered — `ordered`
- Delivered — `delivered`

`u_approval_state`
- Requested — `requested`
- Approved — `approved`
- Rejected — `rejected`
- Not Requested — `not_requested`

Add the fields to the form. Make requester, manager, department, laptop model, and justification mandatory. Make status and approval state read-only for requesters and control edits through ACLs/roles.
