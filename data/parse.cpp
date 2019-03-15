#include <iostream>
#include <vector>
#include <fstream>
#include <cassert>

int main(int argc, char* argv[]) {

  
  std::ifstream ifs(argv[1]);

  std::vector<double> sizes;
  std::vector<double> omps;
  std::vector<double> tbbs;
  std::vector<double> tfs;

  double size, omp, tbb, tf, s1, s2;

  while(ifs) {
    
    ifs >> size >> omp >> tbb >> tf >> s1 >> s2;

    sizes.push_back(size);
    omps.push_back(omp);
    tbbs.push_back(tbb);
    tfs.push_back(tf);
  }

  assert(sizes.size() == omps.size());
  assert(tbbs.size() == omps.size());
  assert(tfs.size() == omps.size());
  
  std::cout << "sizes: ";
  for(size_t i=0; i<sizes.size(); i+=std::atoi(argv[2])) {
    std::cout << sizes[i] << ","; 
  }
  std::cout << std::endl;
  
  std::cout << "omp: ";
  for(size_t i=0; i<omps.size(); i+=std::atoi(argv[2])) {
    std::cout << omps[i] << ","; 
  }
  std::cout << std::endl;

  std::cout << "tbb: ";
  for(size_t i=0; i<tbbs.size(); i+=std::atoi(argv[2])) {
    std::cout << tbbs[i] << ","; 
  }
  std::cout << std::endl;
  
  std::cout << "cpp-taskflow: ";
  for(size_t i=0; i<tfs.size(); i+=std::atoi(argv[2])) {
    std::cout << tfs[i] << ","; 
  }
  std::cout << std::endl;


  return 0;
}
