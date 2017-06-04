# simon.rb
require 'byebug'

class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    system('clear')
    take_turn until @game_over
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    @sequence_length += 1
    require_sequence

    system('clear')
    round_success_message unless @game_over
  end

  def show_sequence
    add_random_color
    puts "Colors: #{@sequence_length}"
    @seq.each do |color|
      print color.to_s
      sleep(0.5)
      print "\r" + ' ' * 6 + "\r"
      sleep(0.3)
      print "\r"
    end
    nil
  end

  def require_sequence
    # puts
    print 'Input sequence as characters (i.e. bgbyr): '
    @game_over = gets.chomp.chars != @seq.map { |el| el.to_s.chars.first }
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts 'Success!'
  end

  def game_over_message
    puts 'Wrong! Game over!'
    puts "The correct sequence was: #{@seq.join(' ')}"
  end

  def reset_game
    @sequence_length = 1
    @seq = []
    @game_over = false
  end
end
