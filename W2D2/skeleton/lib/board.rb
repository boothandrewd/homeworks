# W2D2/skeleton/board.rb
require_relative 'player'

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @player_info = {
      name1 => { name: name1, opponent: name2, cup: 6, cups: (0..5).to_a },
      name2 => { name: name2, opponent: name1, cup: 13, cups: (7..12).to_a }
    }

    @cups = (0...14).map do |idx|
      [6, 13].include?(idx) ? [] : [:stone] * 4
    end
  end

  def valid_move?(start_pos)
    raise 'Invalid starting cup' unless ((1..6).to_a + (7..12).to_a).include?(start_pos)
  end

  def make_move(start_pos, current_player_name)
    current_player_info = @player_info[current_player_name]
    opponent_info = @player_info[current_player_info[:opponent]]

    handful = @cups[start_pos].dup
    @cups[start_pos] = []

    opponent_cup = opponent_info[:cup]
    current_pos = start_pos
    until handful.empty?
      current_pos = (current_pos + 1) % @cups.count
      @cups[current_pos] << handful.pop unless current_pos == opponent_cup
    end

    render

    next_turn(current_pos, current_player_info)
  end

  def next_turn(ending_cup_idx, current_player_info)
    # helper method to determine what #make_move returns
    if ending_cup_idx == current_player_info[:cup]
      :prompt
    elsif @cups[ending_cup_idx].count > 1
      ending_cup_idx
    else
      :switch
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @player_info.map do |_, player|
      player[:cups]
    end.any? do |indices|
      indices.all? { |index| @cups[index].empty? }
    end
  end

  def winner
    return :draw if @cups[6].count == @cups[13].count
    @player_info.max_by { |_, player| @cups[player[:cup]].count }.last[:name]
  end
end
