## README

### How to run the program
```
# terminal 1
cd auto_scheduler
pip install -r requirements.txt
python manage.py runserver
# terminal 2
cd auto_scheduler/frontend
npm run dev
```
If you see something like:
```
ERROR: Could not build wheels for cryptography, which is required to install pyproject.toml-based projects
```
Please run
```
python -m pip install --upgrade pip setuptools wheel
```

### Run Tests
```
cd auto_scheduler
pytest manage.py pytest accounts/tests/<test file>
```

