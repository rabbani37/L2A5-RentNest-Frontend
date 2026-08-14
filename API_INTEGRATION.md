# API Integration — RentNest Frontend

This document maps each frontend component/page to the backend API endpoint(s) it consumes.

> ⚠️ Replace the `Base URL` and any endpoint paths below with your actual backend routes if they differ.

**Base URL:** `process.env.BACKENT_API_URL` (e.g. `https://rentnest-api.vercel.app/api`)

---

## Authentication

| Frontend Component | Endpoint | Method | Notes |
|---|---|---|---|
| `app/auth/register/page.tsx` | `/api/auth/register` | POST | Body: `{ name, email, password, role }`. Role = TENANT or LANDLORD. |
| `app/auth/login/page.tsx` | `/api/auth/login` | POST | Returns `{ user, token }`. Token stored in cookie via `js-cookie`. |

---

## Public — Property Browsing

| Frontend Component | Endpoint | Method | Notes |
|---|---|---|---|
| `app/page.tsx` (Home) | `/api/properties` | GET | Featured listings grid. |

---
<!-- 
## Tenant

| Frontend Component | Endpoint | Method | Notes |
|---|---|---|---|
| `components/request-form.tsx` | `/rentals` | POST | Body: `{ propertyId, message, moveInDate }`. |
| `app/dashboard/tenant/page.tsx` | `/rentals?userId=me` | GET | Request history with status badges. |
| `app/dashboard/tenant/requests/[id]/pay/page.tsx` | `/payments/create` | POST | Body: `{ rentalRequestId }`. Returns `{ sessionUrl }`. |
| `app/payment/success/page.tsx` | `/payments/confirm?session_id=` | GET/POST | Confirms payment, updates request status to ACTIVE. |
| `app/payment/cancel/page.tsx` | — | — | No API call; informational UI only. |
| (Review form, post-payment) | `/reviews` | POST | Body: `{ rentalRequestId, rating, comment }`. |

---

## Landlord

| Frontend Component | Endpoint | Method | Notes |
|---|---|---|---|
| `app/dashboard/landlord/page.tsx` | `/landlord/stats` | GET | Total properties, active requests, earnings. |
| `app/dashboard/landlord/properties/page.tsx` | `/landlord/properties` | GET | Landlord's own listings. |
| `app/dashboard/landlord/properties/new/page.tsx` | `/landlord/properties` | POST | Create listing. |
| `app/dashboard/landlord/properties/[id]/edit/page.tsx` | `/landlord/properties/:id` | GET, PATCH | Fetch + update listing (incl. `isAvailable` toggle). |
| `app/dashboard/landlord/properties/page.tsx` (delete action) | `/landlord/properties/:id` | DELETE | Remove listing. |
| `app/dashboard/landlord/requests/page.tsx` | `/landlord/requests` | GET | Incoming rental requests. |
| `app/dashboard/landlord/requests/page.tsx` (approve/reject) | `/landlord/requests/:id` | PATCH | Body: `{ status: "APPROVED" \| "REJECTED" }`. |

---

## Admin

| Frontend Component | Endpoint | Method | Notes |
|---|---|---|---|
| `app/dashboard/admin/page.tsx` | `/admin/stats` | GET | Total users, properties, pending requests. |
| `app/dashboard/admin/users/page.tsx` | `/admin/users?search=` | GET | Paginated user list. |
| `app/dashboard/admin/users/page.tsx` (ban/unban) | `/admin/users/:id` | PATCH | Body: `{ isBanned: true \| false }`. |
| `app/dashboard/admin/moderation/page.tsx` | `/admin/properties` | GET | All listings platform-wide. |
| `app/dashboard/admin/moderation/page.tsx` | `/admin/rentals` | GET | All rental requests platform-wide. |

---

## Error Handling

All API calls go through a shared Axios instance (`lib/api/client.ts`) with a response interceptor that:
- Normalizes error messages from the backend's error response shape.
- Triggers a toast (`sonner`) on failure.
- Redirects to `/auth/login` on `401 Unauthorized`.

Form-level validation errors (e.g. registration, property creation) are handled client-side via `zod` + `react-hook-form` before hitting the API, and server-side validation errors are surfaced inline under the relevant field.

---

## Admin Test Credentials

```
Email:    admin@rentnest.com
Password: admin123
``` -->