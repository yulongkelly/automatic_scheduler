FROM python:3.9

WORKDIR /code

COPY wait-for-it.sh ./
RUN chmod +x /code/wait-for-it.sh

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . ./

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

EXPOSE 8000

CMD ["python", "/code/manage.py", "runserver", "0.0.0.0:8000"]