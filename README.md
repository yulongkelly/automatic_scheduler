## README

### How to run the program
```
pip install -r requirements.txt
$auto_scheduler/auto_scheduler python manage.py runserver # terminal 1
$auto_scheduler/auto_scheduler/frontend npm run dev # terminal 2
```
If you see something like:
```
ERROR: Could not build wheels for cryptography, which is required to install pyproject.toml-based projects
```
Please run
```
python -m pip install --upgrade pip setuptools wheel
```


