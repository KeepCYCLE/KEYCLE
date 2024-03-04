from django.db import models

# Create your models here.
class Stats(models.Model):
    question_id = models.AutoField(primary_key = True)
    correct_answer = models.IntegerField()

    class Meta:
    	# 모델의 내용이 변경 가능하면 Ture, 변경 불가능하면 False 
        db_table = 'answer_db'