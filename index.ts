import path from "path";
import shell from "shelljs";

const cwd = process.cwd;
const repoUrl = process.env.REPO_URL;
const repoName = process.env.REPO_NAME as string;
const repoDir = path.join(cwd(), "repos");

shell.mkdir("-p", repoDir);
shell.cd(repoDir);
shell.exec(`git clone ${repoUrl}`);

const destDir = process.env.KIT_DEST_DIR as string;
const sourceDir = path.join(repoDir, repoName);

shell.cp("-R", sourceDir, destDir);

shell.rm("-rf", repoDir);
