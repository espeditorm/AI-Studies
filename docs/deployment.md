# Deployment Guide

This application has been converted to a static web application (HTML, CSS, and Vanilla JavaScript). This makes deployment very straightforward.

The core files required for deployment are:
1. `index.html`
2. `script.js`
3. `styles.css`
4. `metadata.json` (optional, for permissions context)

---

## Option 1: GitHub Pages (Recommended)

GitHub Pages is the easiest way to host this application because it serves static files directly from your repository for free.

### Step 1: Prepare the Repository
1. Initialize a git repository (if you haven't already):
   ```bash
   git init
   git add index.html script.js styles.css metadata.json
   git commit -m "Initial commit of static site"
   ```

2. Create a new repository on [GitHub.com](https://github.com).

3. Link your local folder to the remote repository and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages
1. Go to your repository page on GitHub.
2. Click on **Settings** (top tab).
3. On the left sidebar, click **Pages**.
4. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
5. Under **Branch**, select `main` and ensure the folder is `/(root)`.
6. Click **Save**.

### Step 3: Access the Site
GitHub will take a minute to deploy. Refresh the Pages settings page to see your live URL (usually `https://username.github.io/repo-name/`).

---

## Option 2: Google Cloud Run

Cloud Run is a serverless container platform. Since Cloud Run executes containers, we need to wrap our static files in a lightweight web server (like Nginx) using a `Dockerfile`.

### Prerequisites
*   A Google Cloud Platform Project.
*   [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed (`gcloud`).

### Step 1: Create a Dockerfile
Create a file named `Dockerfile` (no extension) in the root directory with the following content:

```dockerfile
# Use a lightweight Nginx image
FROM nginx:alpine

# Copy static files to the Nginx html directory
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY metadata.json /usr/share/nginx/html/

# Expose port 8080 (Cloud Run default)
EXPOSE 8080

# Configure Nginx to listen on 8080 (required for non-root users in some contexts, helpful for Cloud Run)
RUN sed -i 's/listen       80;/listen       8080;/' /etc/nginx/conf.d/default.conf
```

### Step 2: Deploy using Cloud Build
Run the following command in your terminal. This sends your files to Google Cloud, builds the container image remotely, and deploys it to Cloud Run.

```bash
# 1. Login to Google Cloud
gcloud auth login

# 2. Set your project ID
gcloud config set project YOUR_PROJECT_ID

# 3. Deploy
gcloud run deploy ai-playbook \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Step 3: Access the Site
Once the build finishes, the terminal will output a Service URL (e.g., `https://ai-playbook-xyz-uc.a.run.app`). Click that link to view your application.
