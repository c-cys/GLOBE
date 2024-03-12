import os, sys
directory_list = ['기타', '대회', '생명', '화학']
txt = [] ; txt2 = []

for directory in directory_list:
    array = [] ; array2 = [] ; array3 = []
    file_list = os.listdir(directory)
    for file in file_list:
        # file_name
        file_name = file[0:-4]
        array.append(file_name)

        # file_directory
        array2 = list(map(str, file.split()))
        new_file = '%20'.join(array2)
        array3.append(new_file)
    txt.append(array)
    txt2.append(array3)

sys.stdout = open('file_name.txt', 'w')
for i in txt:
    print(i)

sys.stdout = open('file_directory.txt', 'w')
for j in txt2:
    print(j)