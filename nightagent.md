## End-of-Session Git Playbook

Use this checklist whenever you wrap for the night and need to roll work from the current `Working` branch into `master`, then spin up the next dated branch:

1. **Commit any outstanding changes**
   ```bash
   git status
   git add <paths>
   git commit -m "<summary>"
   ```

2. **Push the `Working` branch**
   ```bash
   git push origin Working
   ```

3. **Switch to `master` and update**
   ```bash
   git checkout master
   git pull origin master
   ```

4. **Merge `Working` into `master`**
   ```bash
   git merge Working
   ```
   Resolve conflicts if any, then
   ```bash
   git commit   # only if merge created a conflict resolution commit
   ```

5. **Push updated `master`**
   ```bash
   git push origin master
   ```

6. **Create the next working branch (dated)**
   Replace `<DATE>` with today’s date in `YYYY.MM.DD` (or preferred) format, e.g. `Working-2025.10.29`.
   ```bash
   git checkout -b Working-<DATE>
   git push origin Working-<DATE> -u
   ```

7. **(Optional) Remove old `Working` locally**
   If you no longer need the old `Working` branch locally:
   ```bash
   git branch -d Working
   ```
   You can recreate `Working` later when you begin a new feature session.

---

Keep this file handy so the closing routine is consistent and documented. Update dates or naming conventions as needed.
