set lws="task1" "task2" "task3"
(for %%p in (%lws%) do (
  cd %%p
  call compile.bat
  cd ..
))