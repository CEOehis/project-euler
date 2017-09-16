def sum_multiples_of_num(num)
  result = []
  2.upto(num-1) do |i|

    if i % 3 == 0 || i  % 5 == 0
      result << i
    end
  end
  result.inject(0){|sum,x| sum + x}
end