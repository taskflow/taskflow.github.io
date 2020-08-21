#include <iostream>
#include <taskflow/taskflow.hpp>
int main(){
tf::Taskflow tf;
auto [A, B, C, D] = tf.silent_emplace(
  [] () { std::cout << "TaskA\n"; },     
  [] () { std::cout << "TaskB\n"; },     
  [] () { std::cout << "TaskC\n"; },     
  [] () { std::cout << "TaskD\n"; }      
);
A.precede(B).precede(C).name("A");  
B.precede(D).name("B");  
C.precede(D).name("C");  
D.name("D");
std::cout << tf.dump() ;  
}