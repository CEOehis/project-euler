def fibonacci
  prev_num = 0
  next_num = 1
  interim_num = 0
  sequence = []
  max = 4000000
  while next_num < max do
    sequence.push(next_num)
    interim_num = next_num
    next_num = next_num + prev_num
    prev_num = interim_num
  end
  even_items = []
  for num in sequence
    if num % 2 == 0
      even_items.push(num)
    end
  end
  even_items.inject(0){|sum,x| sum + x}
end