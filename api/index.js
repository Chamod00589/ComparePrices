import express from "express";
const app = express();


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.listen(4000, () => {
  console.log("Server is running on port 3000!");
});
 